import ButtonCard from "@/component/common/button";
import Image from "next/image";
import React from "react";

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/blogs`);
  return res.json();
}

const BlogList = async () => {
  const blogs = await getBlogs();

  console.log(blogs);

  return (
    <div className="common-padding grid lg:grid-cols-3  sm:grid-cols-2  gap-10 py-20">
      {blogs?.map((blog, index) => (
        <div
          key={index}
          className=" shadow-md shadow-white/40 rounded-xl bg-black/30 overflow-hidden"
        >
          <div className="w-full h-[30vh] bg-primary relative ">
            <Image
              src={blog?.banner}
              alt="blog"
              priority
              fill
              
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              className=" w-full h-full object-fill rounded-xl"
            />
          </div>
          <div className="px-3 py-4 mb-2  flex flex-col ">
            <h3 className="text-lg text-white mb-3 ">{blog.title}</h3>
            <div
              className="line-clamp-3 mb-4 font-normal text-white/80"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />
            <div className="flex  justify-center">
              <ButtonCard title="" link="#" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
