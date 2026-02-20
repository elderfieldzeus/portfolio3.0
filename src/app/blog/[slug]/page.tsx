import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import "./blog-article.css";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Zeus Elderfield`,
    description: post.description,
    icons: {
      icon: "/images/logo.png",
      shortcut: "/images/logo.png",
      apple: "/images/logo.png",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-(--w-blogfull) mx-auto flex flex-col items-start my-10">
        <NonHomeHeader
          title={post.title}
          description={post.description}
          returnTo="/blog"
          returnToLabel="Blog"
        />

        <hr className="border-0.5 border-neutral-800 w-full mt-4" />

        <article className="blog-article w-full">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>

          <p className="text-xs text-neutral-500 mt-10 text-right">
            Published on {new Date(post.date).toDateString()}
          </p>
        </article>
      </section>
    </main>
  );
}
