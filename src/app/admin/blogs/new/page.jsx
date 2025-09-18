"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const RichEditor = dynamic(() => import("@/component/common/RichEditor"), { ssr: false });
import { useRouter } from "next/navigation";

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [bannerFile, setBannerFile] = useState(null);
  const [bannerPreview, setBannerPreview] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    // simple front-end gate: ensure user came via login
    // optional: you can add a basic flag in sessionStorage
    // but per request, we will not enforce additional checks
  }, [router]);

  function onPickBanner(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBannerFile(file);
    const url = URL.createObjectURL(file);
    setBannerPreview(url);
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

      const res = await fetch("/api/blogs", { method: "POST", body: form });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 401) {
          router.replace("/admin/login");
          return;
        }
        throw new Error(data.error || "Failed to create blog");
      }
      const blog = await res.json();
      router.push(`/blogs/${blog.slug}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="common-padding py-10">
      <div className="max-w-3xl mx-auto bg-black/40 rounded-xl p-6 shadow-md shadow-white/30">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl text-white font-semibold">Create New Blog</h1>
          <a href="/admin/blogs" className="text-white/70 hover:text-white">Back to list</a>
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
            <RichEditor value={content} onChange={setContent} placeholder="Write your blog content..." />
            <p className="text-xs text-white/60 mt-1">The content is saved as HTML.</p>
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">Banner Image</label>
            <div className="flex items-center gap-4">
              <input ref={fileInputRef} onChange={onPickBanner} type="file" accept="image/*" className="text-white/80" />
              {bannerPreview && (
                <div className="relative w-40 h-24">
                  <Image src={bannerPreview} alt="Preview" fill className="object-cover rounded" />
                </div>
              )}
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="bg-primary text-white px-4 py-2 rounded disabled:opacity-60"
            >
              {submitting ? "Creating..." : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


