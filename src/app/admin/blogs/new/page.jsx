"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

export default function NewBlogPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [bannerFile, setBannerFile] = useState(null);
  const [bannerPreview, setBannerPreview] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  // Only show the form after client mount
  useEffect(() => setMounted(true), []);

  function onPickBanner(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBannerFile(file);
    setBannerPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const form = new FormData();
      form.set("title", title.trim());
      form.set("content", content);
      if (bannerFile) form.set("banner", bannerFile);

      const res = await fetch("/api/blogs", {
        method: "POST",
        body: form,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 401) {
          router.replace("/admin/login");
          return;
        }
        throw new Error(data.error || "Failed to create blog");
      }
      const blog = await res.json();
      // Show success toast (optional, see below)
      router.push("/admin/blogs");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  // Hydration safe: only render after mount
  if (!mounted) return null;

  return (
    <div className="common-padding py-10">
      <div className="max-w-3xl mx-auto bg-black/40 rounded-xl p-6 shadow-md shadow-white/30">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl text-white font-semibold">Create New Blog</h1>
          <a href="/admin/blogs" className="text-white/70 hover:text-white">
            Back to list
          </a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white/80 text-sm mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 rounded bg-black/60 border border-white/20 text-white outline-none"
              placeholder="Enter blog title"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">Content</label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Write your blog content..."
              className="bg-white text-black rounded custom-quill"
            />

            <p className="text-xs text-white/60 mt-1">
              The content is saved as HTML.
            </p>
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">
              Banner Image
            </label>
            <div className="flex items-center gap-4">
              <input
                ref={fileInputRef}
                onChange={onPickBanner}
                type="file"
                accept="image/*"
                className="text-white/80"
              />
              {bannerPreview && (
                <div className="relative w-40 h-24">
                  <Image
                    src={bannerPreview}
                    alt="Preview"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}
            </div>
          </div>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="bg-primary text-white px-4 py-2 rounded disabled:opacity-60 flex items-center gap-2"
            >
              {submitting && (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
              )}
              {submitting ? "Creating..." : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
