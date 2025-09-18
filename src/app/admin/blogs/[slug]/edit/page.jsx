"use client";
import ImageComponent from "@/component/common/ImageComponent";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const RichEditor = dynamic(() => import("@/component/common/RichEditor"), { ssr: false });
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

  useEffect(() => {
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
      router.push(`/blogs/${updated.slug}`);
    } catch (err) {
      setError(err.message || "Update failed");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="common-padding py-10 text-white/80">Loading...</div>;

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
            <RichEditor value={content} onChange={setContent} />
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">Banner Image</label>
            <div className="flex items-center gap-4">
              <input onChange={onPickBanner} type="file" accept="image/*" className="text-white/80" />
              {bannerPreview && (
                <div className="relative w-40 h-24">
                  <ImageComponent src={bannerPreview} alt="Preview" fill imgCss="object-cover rounded" />
                </div>
              )}
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="bg-primary text-white px-4 py-2 rounded disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


