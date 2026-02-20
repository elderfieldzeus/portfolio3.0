import Link from "next/link";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-(--w-mfull) mx-auto flex flex-col items-start gap-8 my-10">
        <NonHomeHeader
          title="Blog"
          description="Thoughts, writeups, and notes on tech, projects, and things I find interesting."
          returnTo="/explore"
          returnToLabel="Explore"
        />

        <div className="flex flex-col gap-4 w-full">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-600 transition-colors bg-neutral-950 hover:bg-neutral-900">
                <p className="text-xs text-neutral-500 mb-1">
                  {new Date(post.date).toDateString()}
                </p>
                <p className="text-lg font-medium">{post.title}</p>
                <p className="text-sm text-neutral-400 mt-1">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <p className="text-sm text-neutral-500">No posts yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
