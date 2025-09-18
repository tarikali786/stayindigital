import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), "public/uploads");

// Ensure upload directory exists
async function ensureUploadDir() {
  try {
    await fs.access(uploadDir);
  } catch (err) {
    await fs.mkdir(uploadDir, { recursive: true });
  }
}

const filePath = path.join(process.cwd(), "data", "blogs.json");

function isAdminAuthenticated() { return true; }

// GET Method - Fetch a Single Blog by Slug
export async function GET(request) {
  await ensureUploadDir();

  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const data = await fs.readFile(filePath, "utf-8");
    const blogs = JSON.parse(data);
    if (!slug) {
      return NextResponse.json(Array.isArray(blogs) ? blogs : []);
    }
    const blog = blogs.find((b) => b.slug === slug);
    if (!blog)
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });

    return NextResponse.json(blog);
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(filePath, JSON.stringify([]));
      return NextResponse.json({ error: "No blogs found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// HEAD Method - Simple auth check for admin UI
export async function HEAD(request) {
  try {
    return new Response(null, { status: 200 });
  } catch (_) {
    return new Response(null, { status: 500 });
  }
}

// POST Method - Upload File & Create Blog with Unique Slug
export async function POST(request) {
  await ensureUploadDir();

  try {
    if (!isAdminAuthenticated(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const banner = formData.get("banner");

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let bannerPath = null;
    if (banner) {
      // Handle file upload
      const buffer = await banner.arrayBuffer();
      const fileName = `${Date.now()}-${banner.name}`;
      bannerPath = `/uploads/${fileName}`;
      await fs.writeFile(path.join(uploadDir, fileName), Buffer.from(buffer));
    }

    // Read and update blogs
    let blogs = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      blogs = JSON.parse(data);
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }

    let slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^a-z0-9-]/g, "");
    let uniqueSlug = slug;
    let counter = 1;

    while (blogs.some((b) => b.slug === uniqueSlug)) {
      uniqueSlug = `${slug}-${counter}`;
      counter++;
    }

    const newBlog = {
      id: Date.now(),
      title,
      content,
      slug: uniqueSlug,
      banner: bannerPath,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    blogs.push(newBlog);
    await fs.writeFile(filePath, JSON.stringify(blogs, null, 2));

    return NextResponse.json(newBlog, { status: 201 });
  } catch (err) {
    console.error("Error processing request:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
// PUT Method - Update Blog by Slug
export async function PUT(request) {
  try {
    if (!isAdminAuthenticated(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const formData = await request.formData();
    const slug = formData.get("slug");
    const title = formData.get("title");
    const content = formData.get("content");
    const banner = formData.get("banner");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    let blogs = JSON.parse(await fs.readFile(filePath, "utf-8"));
    const blogIndex = blogs.findIndex((b) => b.slug === slug);
    if (blogIndex === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    let bannerPath = blogs[blogIndex].banner;
    if (banner) {
      const buffer = await banner.arrayBuffer();
      const fileName = `${Date.now()}-${banner.name}`;
      bannerPath = `/uploads/${fileName}`;
      await fs.writeFile(path.join(uploadDir, fileName), Buffer.from(buffer));
    }

    blogs[blogIndex] = {
      ...blogs[blogIndex],
      title,
      content,
      banner: bannerPath,
      updatedAt: new Date().toISOString(),
    };

    await fs.writeFile(filePath, JSON.stringify(blogs, null, 2));
    return NextResponse.json(blogs[blogIndex], { status: 200 });
  } catch (err) {
    console.error("Error updating blog:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE Method - Remove Blog by Slug
export async function DELETE(request) {
  try {
    if (!isAdminAuthenticated(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    let blogs = JSON.parse(await fs.readFile(filePath, "utf-8"));
    const newBlogs = blogs.filter((b) => b.slug !== slug);
    if (blogs.length === newBlogs.length) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    await fs.writeFile(filePath, JSON.stringify(newBlogs, null, 2));
    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting blog:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
