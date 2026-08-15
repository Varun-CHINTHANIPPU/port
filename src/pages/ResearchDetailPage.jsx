import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, GitBranch } from 'lucide-react';
import { initialPortfolioData } from '../data/portfolioData';

export const ResearchDetailPage = () => {
  const { articleId } = useParams();

  const researchList = initialPortfolioData.research;
  const articleIndex = researchList.findIndex(
    r => r.id === articleId || r.id.replace(/-/g, '') === articleId?.replace(/-/g, '')
  );

  const article = articleIndex !== -1 ? researchList[articleIndex] : researchList[0];
  const nextArticle = researchList[(articleIndex + 1) % researchList.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    return (
      <div className="personal-container py-36 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Research Article Not Found</h2>
        <Link to="/research" className="text-zinc-400 hover:text-white underline">Return to Research</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#09090b] text-zinc-100 font-sans animate-fadeIn">
      <div className="personal-container max-w-[840px] space-y-14">
        
        {/* Back Link */}
        <div>
          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Research</span>
          </Link>
        </div>

        {/* Research Header */}
        <header className="space-y-5 border-b border-zinc-850 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
            <span className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-0.5 text-zinc-300">
              {article.area}
            </span>
            <span>{article.year}</span>
            <span>·</span>
            <span>{article.status}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18]">
            {article.title}
          </h1>

          <div className="text-xs font-mono text-zinc-400">
            Venue: <strong className="text-zinc-200">{article.venue}</strong>
          </div>
        </header>

        {/* Abstract & Content */}
        <div className="space-y-10 text-zinc-300 text-base sm:text-lg leading-relaxed">
          
          <section className="space-y-3 bg-zinc-950/60 p-6 sm:p-8 rounded-xl border border-zinc-850">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Abstract &amp; Summary
            </h2>
            <p className="text-zinc-200 leading-relaxed">
              {article.abstract}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Investigated Technologies &amp; Primitives
            </h2>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {article.technologies?.map((tech, idx) => (
                <span key={idx} className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {article.paperLink && (
            <section className="pt-4">
              <a
                href={article.paperLink}
                target="_blank"
                rel="noreferrer"
                className="clean-btn clean-btn-primary py-2.5 px-5 text-xs font-medium"
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>View Full Paper &amp; Artifacts Repository</span>
              </a>
            </section>
          )}

        </div>

        {/* Next Research Entry Navigation */}
        <footer className="pt-12 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans">
          <Link
            to="/research"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to all research
          </Link>

          {nextArticle && nextArticle.id !== article.id && (
            <Link
              to={`/research/${nextArticle.id}`}
              className="flex items-center gap-2 text-zinc-200 hover:text-white group text-sm"
            >
              <span>Next Paper: <strong>{nextArticle.title}</strong></span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </footer>

      </div>
    </article>
  );
};

export default ResearchDetailPage;
