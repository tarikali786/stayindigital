"use client";
import ButtonCard from "@/component/common/button";
import LoadingRipple from "@/component/common/loading";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getBlogs() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/blogs`);
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (blogs.length == 0) {
      setLoading(true);
      getBlogs();
    }
  }, []);

  if (loading) return <LoadingRipple />;

  return (
    <div className="common-padding grid lg:grid-cols-3 sm:grid-cols-2 gap-10 py-20">
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div
            key={index}
            className="shadow-md shadow-white/40 rounded-xl bg-black/30 overflow-hidden"
          >
            <div className="w-full h-[30vh] bg-primary relative">
              <Image
                src={blog?.banner}
                alt="blog"
                priority
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
            <div className="px-3 py-4 mb-2 flex flex-col">
              <h3 className="text-lg text-white mb-3">{blog.title}</h3>
              <div
                className="line-clamp-3 mb-4 font-normal text-white/80"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              <div className="flex justify-center">
                <ButtonCard title="Read More" link="#" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-center col-span-3">No blogs available</p>
      )}
    </div>
  );
};

export default BlogList;
