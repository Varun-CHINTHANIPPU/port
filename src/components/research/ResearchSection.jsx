import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { initialPortfolioData } from '../../data/portfolioData';
import { LightReflectiveCard } from '../common/LightReflectiveCard';

export const ResearchSection = () => {
  const researchPapers = initialPortfolioData.research;

  return (
    <section id="research" className="section-wrapper">
      <div className="personal-container">
        
        {/* Section Header */}
        <div className="section-header space-y-3">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
            Research &amp; Notes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Cryptographic &amp; Protocol Research
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Formal studies on zero-knowledge proofs, post-quantum key encapsulation migration, 
            and X.509 certificate trust models.
          </p>
        </div>

        {/* Guaranteed 24px Gap on Card List */}
        <div className="card-list">
          {researchPapers.map((paper) => (
            <Link
              key={paper.id}
              to={`/research/${paper.id}`}
              className="block no-underline"
            >
              <LightReflectiveCard
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 group cursor-pointer"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <span>{paper.year}</span>
                    <span>·</span>
                    <span>{paper.area}</span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                    {paper.title}
                  </h3>

                  <p className="text-zinc-300 text-base leading-relaxed font-normal">
                    {paper.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-zinc-500">
                    {paper.technologies.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-zinc-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-400 group-hover:text-zinc-100 flex items-center gap-1.5 transition-colors shrink-0 self-start sm:self-center font-medium">
                  <span>Read paper</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </LightReflectiveCard>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResearchSection;
