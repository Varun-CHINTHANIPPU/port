import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { initialPortfolioData } from '../data/portfolioData';
import { LightReflectiveCard } from '../components/common/LightReflectiveCard';

export const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = initialPortfolioData.projects;
  const primaryProjects = projects.slice(0, 4);
  const secondaryProjects = projects.slice(4);

  return (
    <div className="animate-fadeIn">
      <div className="personal-container space-y-16">
        
        {/* Page Header */}
        <div className="section-header space-y-3">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
            Engineering Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work &amp; Systems Projects
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            A collection of applied cryptography engines, hardware simulators, and security infrastructure 
            implemented from first principles.
          </p>
        </div>

        {/* Primary Projects List */}
        <div className="card-list">
          {primaryProjects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="block no-underline"
            >
              <LightReflectiveCard className="cursor-pointer space-y-4">
                <div className="text-xs font-mono text-zinc-500">
                  {`0${idx + 1}`} — {project.categoryShort || project.category}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                  {project.title}
                </h2>

                <p className="text-zinc-300 text-base leading-relaxed max-w-3xl font-normal">
                  {project.summary || project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-850 text-xs font-mono">
                  <div className="flex flex-wrap gap-2 text-zinc-400">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-zinc-400">
                        {tech}{i < Math.min(project.techStack.length, 4) - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-zinc-100 transition-colors font-medium">
                    <span>View project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </LightReflectiveCard>
            </Link>
          ))}
        </div>

        {/* Secondary / Additional Projects Area */}
        {secondaryProjects.length > 0 && (
          <div className="space-y-6 pt-10 border-t border-zinc-850">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-medium">
                Additional Projects
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Pipelines &amp; Systems Automation
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/work/${project.id}`}
                  className="block no-underline"
                >
                  <LightReflectiveCard className="cursor-pointer p-6 space-y-3 h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-zinc-500">
                        {project.categoryShort || project.category}
                      </div>
                      <h4 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-zinc-850 text-xs font-mono text-zinc-400">
                      <span>{project.techStack[0]}</span>
                      <span className="group-hover:text-zinc-100 flex items-center gap-1">
                        View <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </LightReflectiveCard>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default WorkPage;
