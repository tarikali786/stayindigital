import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const config = {
  api: {
    bodyParser: false,
  },
};

// We no longer use the filesystem for persistence or uploads.
// Banners will be stored as data URLs in MongoDB for simplicity.
// If you prefer object storage, replace this with an uploader and store the URL.

function isAdminAuthenticated() { return true; }

// GET Method - Fetch a Single Blog by Slug
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const db = await getDb();
    const collection = db.collection("blogs");

    if (!slug) {
      const blogs = await collection
        .find({}, { projection: { _id: 0 } })
        .sort({ createdAt: -1 })
        .toArray();
      return NextResponse.json(blogs);
    }

    const blog = await collection.findOne({ slug }, { projection: { _id: 0 } });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (err) {
    console.error("Error fetching blog(s):", err);
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
  try {
    if (!isAdminAuthenticated(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const formData = await request.formData();
    const title = (formData.get("title") || "").toString().trim();
    const content = (formData.get("content") || "").toString().trim();
    const banner = formData.get("banner");

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let bannerDataUrl = null;
    if (banner && typeof banner === "object" && "arrayBuffer" in banner) {
      const maxBytes = 20 * 1024 * 1024; 
      const allowed = ["image/png", "image/jpeg", "image/webp"];
      const mimeType = banner.type || "";
      if (!allowed.includes(mimeType)) {
        return NextResponse.json({ error: "Unsupported image type" }, { status: 400 });
      }
      const arrayBuf = await banner.arrayBuffer();
      if (arrayBuf.byteLength > maxBytes) {
        return NextResponse.json({ error: "Image too large (max 2MB)" }, { status: 400 });
      }
      const base64 = Buffer.from(arrayBuf).toString("base64");
      bannerDataUrl = `data:${mimeType};base64,${base64}`;
    }

    const db = await getDb();
    const collection = db.collection("blogs");

    // Compute unique slug
    const baseSlug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    let uniqueSlug = baseSlug;
    let counter = 1;
    while (await collection.findOne({ slug: uniqueSlug })) {
      uniqueSlug = `${baseSlug}-${counter++}`;
    }

    const now = new Date().toISOString();
    const newBlog = {
      id: Date.now(),
      title,
      content,
      slug: uniqueSlug,
      banner: bannerDataUrl,
      createdAt: now,
      updatedAt: now,
    };

    await collection.insertOne(newBlog);
    // Exclude _id for consistency with existing UI
    const { _id, ...doc } = newBlog;
    return NextResponse.json(doc, { status: 201 });
  } catch (err) {
    console.error("Error creating blog:", err);
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
    const slug = (formData.get("slug") || "").toString().trim();
    const title = formData.get("title");
    const content = formData.get("content");
    const banner = formData.get("banner");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    let bannerDataUrl;
    if (banner && typeof banner === "object" && "arrayBuffer" in banner) {
      const maxBytes = 2 * 1024 * 1024; // 2MB
      const allowed = ["image/png", "image/jpeg", "image/webp"];
      const mimeType = banner.type || "";
      if (!allowed.includes(mimeType)) {
        return NextResponse.json({ error: "Unsupported image type" }, { status: 400 });
      }
      const arrayBuf = await banner.arrayBuffer();
      if (arrayBuf.byteLength > maxBytes) {
        return NextResponse.json({ error: "Image too large (max 2MB)" }, { status: 400 });
      }
      const base64 = Buffer.from(arrayBuf).toString("base64");
      bannerDataUrl = `data:${mimeType};base64,${base64}`;
    }

    const db = await getDb();
    const collection = db.collection("blogs");

    const existing = await collection.findOne({ slug });
    if (!existing) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const updated = {
      ...existing,
      title: title ?? existing.title,
      content: content ?? existing.content,
      banner: bannerDataUrl ?? existing.banner,
      updatedAt: new Date().toISOString(),
    };

    await collection.updateOne({ slug }, { $set: updated });
    const { _id, ...doc } = updated;
    return NextResponse.json(doc, { status: 200 });
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

    const db = await getDb();
    const collection = db.collection("blogs");

    const deletion = await collection.findOneAndDelete({ slug });
    if (!deletion.value) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
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
