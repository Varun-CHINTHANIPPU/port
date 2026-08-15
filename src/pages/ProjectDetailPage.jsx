import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, GitBranch, ExternalLink } from 'lucide-react';
import { initialPortfolioData } from '../data/portfolioData';
import { Tls13HandshakeSimulator } from '../components/work/Tls13HandshakeSimulator';

export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = initialPortfolioData.projects;
  
  // Find project by id or category slug
  const projectIndex = projects.findIndex(
    p => p.id === projectId || p.id.replace(/-/g, '') === projectId?.replace(/-/g, '')
  );

  const project = projectIndex !== -1 ? projects[projectIndex] : projects[0];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="personal-container py-32 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
        <Link to="/" className="text-zinc-400 hover:text-white underline">Return Home</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#09090b] text-zinc-100 font-sans pt-32 pb-32">
      <div className="personal-container max-w-[860px] space-y-16">
        
        {/* Back Link */}
        <div>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-medium">
              {project.categoryShort || project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              {project.title}
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Tech Stack & Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-850 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2 text-zinc-400">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="clean-btn clean-btn-primary text-xs py-1.5 px-3.5"
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>View Source Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* Deep Engineering Sections */}
        <div className="space-y-14 text-zinc-300 text-base sm:text-lg leading-relaxed">
          
          {/* 1. Problem / Why I Built It */}
          {project.problem && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                Why I Built It
              </h2>
              <p className="text-zinc-300 font-normal">
                {project.problem}
              </p>
            </section>
          )}

          {/* 2. Architecture & Design */}
          {project.architecture && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                Architecture &amp; System Design
              </h2>
              <p className="text-zinc-300 font-normal">
                {project.architecture}
              </p>
            </section>
          )}

          {/* 3. Implementation Details */}
          {project.implementation && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                Implementation
              </h2>
              <p className="text-zinc-300 font-normal">
                {project.implementation}
              </p>
            </section>
          )}

          {/* 4. Contextual Interactive Demonstration (If TLS 1.3) */}
          {project.id === 'tls13-analyzer-hardening' && (
            <section className="space-y-4 pt-2">
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Interactive Demonstration
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                  Interactive TLS 1.3 Handshake Simulator
                </h2>
                <p className="text-sm text-zinc-400">
                  Step through the packet-level handshake frames and key exchange progression.
                </p>
              </div>
              <Tls13HandshakeSimulator />
            </section>
          )}

          {/* 5. Security Considerations */}
          {project.securityConsiderations && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                Security &amp; Engineering Considerations
              </h2>
              <p className="text-zinc-300 font-normal">
                {project.securityConsiderations}
              </p>
            </section>
          )}

          {/* 6. Technical Challenges */}
          {project.challenges && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                Challenges &amp; Trade-offs
              </h2>
              <p className="text-zinc-300 font-normal">
                {project.challenges}
              </p>
            </section>
          )}

          {/* 7. Results & Verified Outcomes */}
          {project.results && (
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                Results &amp; Verified Outcomes
              </h2>
              <p className="text-zinc-300 font-normal">
                {project.results}
              </p>
            </section>
          )}

        </div>

        {/* Next / Related Project Navigation */}
        <footer className="pt-12 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans">
          <Link
            to="/#work"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to all projects
          </Link>

          {nextProject && (
            <Link
              to={`/work/${nextProject.id}`}
              className="editorial-link flex items-center gap-2 text-zinc-200 hover:text-white group"
            >
              <span className="text-sm">Next Project: <strong>{nextProject.title}</strong></span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </footer>

      </div>
    </article>
  );
};

export default ProjectDetailPage;
