import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { initialBlogsData } from '../data/blogsData';

export const BlogDetailPage = () => {
  const { slug } = useParams();

  const postIndex = initialBlogsData.findIndex(p => p.slug === slug);
  const post = postIndex !== -1 ? initialBlogsData[postIndex] : initialBlogsData[0];
  const nextPost = initialBlogsData[(postIndex + 1) % initialBlogsData.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="personal-container py-36 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Post Not Found</h2>
        <Link to="/blogs" className="text-zinc-400 hover:text-white underline">Return to Blogs</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#09090b] text-zinc-100 font-sans animate-fadeIn">
      <div className="personal-container max-w-[820px] space-y-12">
        
        {/* Back Link */}
        <div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="space-y-4 border-b border-zinc-850 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
            <span className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-0.5 text-zinc-300">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18]">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal pt-2">
            {post.summary}
          </p>
        </header>

        {/* Post Body with Comfortable Editorial Typography */}
        <div className="prose prose-invert max-w-none space-y-7 text-zinc-300 text-base sm:text-lg leading-relaxed">
          {post.content.split('\n\n').map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-2xl font-bold text-white pt-6 pb-1 tracking-tight">
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }

            if (trimmed.startsWith('```')) {
              const lines = trimmed.split('\n');
              const language = lines[0].replace('```', '').trim();
              const code = lines.slice(1, -1).join('\n');
              return (
                <div key={idx} className="my-6 rounded-xl bg-[#121318] border border-zinc-800 p-5 font-mono text-xs sm:text-sm text-zinc-200 overflow-x-auto">
                  {language && (
                    <div className="text-[11px] uppercase tracking-wider text-zinc-500 pb-2 border-b border-zinc-850 mb-3">
                      {language}
                    </div>
                  )}
                  <pre className="leading-relaxed whitespace-pre-wrap">{code}</pre>
                </div>
              );
            }

            if (trimmed.startsWith('- ')) {
              const listItems = trimmed.split('\n');
              return (
                <ul key={idx} className="space-y-2 list-disc list-inside text-zinc-300 pl-2">
                  {listItems.map((li, i) => (
                    <li key={i} className="leading-relaxed">
                      {li.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              );
            }

            if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ')) {
              const listItems = trimmed.split('\n');
              return (
                <ol key={idx} className="space-y-2 list-decimal list-inside text-zinc-300 pl-2">
                  {listItems.map((li, i) => (
                    <li key={i} className="leading-relaxed">
                      {li.replace(/^\d+\.\s*/, '')}
                    </li>
                  ))}
                </ol>
              );
            }

            return (
              <p key={idx} className="text-zinc-300 font-normal">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Footer & Next Post Navigation */}
        <footer className="pt-12 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans">
          <Link
            to="/blogs"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to all blogs
          </Link>

          {nextPost && nextPost.slug !== post.slug && (
            <Link
              to={`/blogs/${nextPost.slug}`}
              className="flex items-center gap-2 text-zinc-200 hover:text-white group text-sm"
            >
              <span>Next Note: <strong>{nextPost.title}</strong></span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </footer>

      </div>
    </article>
  );
};

export default BlogDetailPage;
