import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { initialBlogsData } from '../data/blogsData';
import { LightReflectiveCard } from '../components/common/LightReflectiveCard';

export const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      <div className="personal-container">
        
        {/* Page Header */}
        <div className="section-header space-y-3">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
            Engineering Notes
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Blogs &amp; Observations
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            Notes, tutorials, implementation lessons, and personal technical experiences 
            across low-level systems, cryptography, and network engineering.
          </p>
        </div>

        {/* Blog Posts Card List */}
        <div className="card-list">
          {initialBlogsData.map((post) => (
            <Link
              key={post.slug}
              to={`/blogs/${post.slug}`}
              className="block no-underline"
            >
              <LightReflectiveCard className="cursor-pointer space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500">
                  <span>{post.category}</span>
                  <span>{post.date} · {post.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                  {post.title}
                </h2>

                <p className="text-zinc-300 text-base leading-relaxed font-normal max-w-3xl">
                  {post.summary}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-zinc-100 transition-colors pt-2">
                  <span>Read post</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </LightReflectiveCard>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogsPage;
