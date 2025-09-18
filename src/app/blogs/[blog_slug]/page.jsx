"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LoadingRipple from "@/component/common/loading";

const BlogDetails = () => {
  const { blog_slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBlogDetails() {
      try {
        const res = await fetch(`/api/blogs?slug=${blog_slug}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogDetails();
  }, [blog_slug]);

  if (loading) {
    return <LoadingRipple />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">
          Blog not found or an error occurred.
        </p>
      </div>
    );
  }

  return (
    <div className="common-padding mx-auto p-5">
      {/* Banner Section */}
      <div className="relative w-full md:h-[60vh] sm:h-[50vh] h-[40vh] rounded-xl  shadow shadow-white">
        <Image
          src={blog?.banner || "/blog.webp"}
          alt={blog?.title || "Blog banner"}
          fill
          className="object-cover"
          priority
        />
        {/* Title Overlay */}
        <div className="absolute -bottom-6 md:left-10 left-2  bg-white shadow-md px-6 py-3 rounded-lg">
          <h1 className="md:text-2xl sm:text-xl  font-bold text-primary">{blog?.title}</h1>
        </div>
      </div>

      <div className="mt-16 flex justify-between items-center text-white/80 text-sm">
        <span>
          Publish Date: {new Date(blog?.updatedAt).toLocaleDateString()}
        </span>
      </div>

      {/* Blog Content */}
      <div className="mt-6 space-y-6 text-white/90 leading-relaxed">
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
