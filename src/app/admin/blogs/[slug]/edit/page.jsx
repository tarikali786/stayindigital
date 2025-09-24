"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import { useParams, useRouter } from "next/navigation";

export default function EditBlogPage() {
  const router = useRouter();
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [bannerFile, setBannerFile] = useState(null);
  const [bannerPreview, setBannerPreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function load() {
      try {
        const res = await fetch(`/api/blogs?slug=${slug}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load blog");
        const data = await res.json();
        setTitle(data.title || "");
        setContent(data.content || "");
        setBannerPreview(data.banner || "");
      } catch (err) {
        setError(err.message || "Error loading blog");
      } finally {
        setLoading(false);
      }
    }
    if (slug) load();
  }, [slug]);

  function onPickBanner(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBannerFile(file);
    const url = URL.createObjectURL(file);
    setBannerPreview(url);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const form = new FormData();
      form.set("slug", slug);
      form.set("title", title.trim());
      form.set("content", content);
      if (bannerFile) form.set("banner", bannerFile);

      const res = await fetch("/api/blogs", { method: "PUT", body: form });
      if (!res.ok) throw new Error("Failed to update blog");
      const updated = await res.json();
      // Show success toast (optional, see below)
      router.push("/admin/blogs");
    } catch (err) {
      setError(err.message || "Update failed");
    } finally {
      setSaving(false);
    }
  }

  if (!mounted || loading) return <div className="common-padding py-10 text-white/80">Loading...</div>;

  return (
    <div className="common-padding py-10">
      <div className="max-w-3xl mx-auto bg-black/40 rounded-xl p-6 shadow-md shadow-white/30">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl text-white font-semibold">Edit Blog</h1>
          <Link href="/admin/blogs" className="text-white/70 hover:text-white">Back to list</Link>
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
            <p className="text-xs text-white/60 mt-1">The content is saved as HTML.</p>
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">Banner Image</label>
            <div className="flex items-center gap-4">
              <input onChange={onPickBanner} type="file" accept="image/*" className="text-white/80" />
              {bannerPreview && (
                <div className="relative w-40 h-24">
                  <Image src={bannerPreview} alt="Preview" fill className="object-cover rounded" />
                </div>
              )}
            </div>
          </div>

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="bg-primary text-white px-4 py-2 rounded disabled:opacity-60 flex items-center gap-2"
            >
              {saving && (
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
              )}
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


