// 4. Blog Detail Page (app/blogs/[slug]/page.js)
async function getBlog(slug) {
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs = await res.json();
  return blogs.find((b) => b.slug === slug);
}

export default async function BlogDetail({ params }) {
  const blog = await getBlog(params.slug);
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
