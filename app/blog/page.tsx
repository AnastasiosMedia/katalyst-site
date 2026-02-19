import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest updates, articles, and insights about Katalyst — the backend for agentic engineering.",
};

const gradients = [
  "from-violet-600 to-purple-800",
  "from-cyan-600 to-blue-800",
  "from-emerald-600 to-teal-800",
  "from-rose-600 to-pink-800",
  "from-amber-600 to-orange-800",
  "from-indigo-600 to-violet-800",
  "from-fuchsia-600 to-purple-800",
  "from-sky-600 to-cyan-800",
];

export default function BlogPage() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const regular = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="tag-label mb-4">Insights</p>
          <h1 className="text-4xl md:text-5xl font-semibold font-display mb-4 tracking-tight">Blog</h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Latest updates, articles, and insights about Katalyst
          </p>
        </div>

        {/* Featured posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((post, i) => (
            <a
              key={post.slug}
              href="#"
              className="group block bg-bg-secondary border border-border rounded-xl overflow-hidden card-hover"
            >
              <div
                className={`h-48 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center p-6`}
              >
                <span className="text-white/80 text-sm font-mono text-center">
                  {post.title}
                </span>
              </div>
              <div className="p-6">
                <time className="text-xs text-text-tertiary font-mono">{post.date}</time>
                <h2 className="text-lg font-semibold text-text-primary mt-2 mb-3 font-display group-hover:text-accent-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent-gold flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">K</span>
                  </div>
                  <span className="text-xs text-text-tertiary">{post.author}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Regular posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regular.map((post, i) => (
            <a
              key={post.slug}
              href="#"
              className="group block bg-bg-secondary border border-border rounded-xl overflow-hidden card-hover"
            >
              <div
                className={`h-32 bg-gradient-to-br ${
                  gradients[(i + 3) % gradients.length]
                } flex items-center justify-center p-4`}
              >
                <span className="text-white/60 text-xs font-mono text-center">
                  {post.title}
                </span>
              </div>
              <div className="p-5">
                <time className="text-xs text-text-tertiary font-mono">{post.date}</time>
                <h2 className="text-sm font-semibold text-text-primary mt-2 mb-2 font-display group-hover:text-accent-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
