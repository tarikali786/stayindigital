import BlogList from "@/component/page/blog/blog-list";
import Hero from "@/component/page/blog/hero";

export const metadata = {
  title: "Blog | Stayindigital",
  description:
    "Read insights on SEO, Social Media, Web Development, Advertising and more from Stayindigital.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blog | Stayindigital",
    description:
      "Read insights on SEO, Social Media, Web Development, Advertising and more from Stayindigital.",
    url: "https://stayindigital.com/blogs",
    images: [
      { url: "/StayLogo.png", width: 1200, height: 630, alt: "Stayindigital" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Stayindigital",
    description:
      "Read insights on SEO, Social Media, Web Development, Advertising and more from Stayindigital.",
    images: ["/StayLogo.png"],
  },
};

export default async function Blogs() {
  return (
    <>
      <Hero />
      <BlogList />
    </>
  );
}
