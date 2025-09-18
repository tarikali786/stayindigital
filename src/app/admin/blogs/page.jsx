"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AdminBlogsListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingSlug, setDeletingSlug] = useState("");

  async function loadBlogs() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/blogs", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load blogs");
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBlogs();
  }, []);

  async function handleDelete(slug) {
    if (!confirm("Delete this blog?")) return;
    setDeletingSlug(slug);
    try {
      const res = await fetch(`/api/blogs?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      await loadBlogs();
    } catch (err) {
      alert(err.message || "Failed to delete blog");
    } finally {
      setDeletingSlug("");
    }
  }

  return (
    <div className="common-padding py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl text-white font-semibold">Manage Blogs</h1>
        <Link
          href="/admin/blogs/new"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          New Blog
        </Link>
      </div>

      {loading && <p className="text-white/80">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && blogs.length === 0 && (
        <p className="text-white/80">No blogs yet.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-black/40 rounded-xl overflow-hidden shadow-md shadow-white/30">
            <div className="relative w-full h-40 bg-black/30">
              <Image
                src={blog.banner || "/blog.webp"}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-white text-lg mb-2 line-clamp-2">{blog.title}</h3>
              <p className="text-white/60 text-sm mb-3">{new Date(blog.updatedAt).toLocaleString()}</p>
              <div className="flex gap-2">
                <Link
                  href={`/admin/blogs/${blog.slug}/edit`
                  }
                  className="px-3 py-2 rounded bg-white/10 text-white hover:bg-white/20"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog.slug)}
                  disabled={deletingSlug === blog.slug}
                  className="px-3 py-2 rounded bg-red-600/80 text-white disabled:opacity-60"
                >
                  {deletingSlug === blog.slug ? "Deleting..." : "Delete"}
                </button>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="ml-auto px-3 py-2 rounded bg-primary text-white"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


