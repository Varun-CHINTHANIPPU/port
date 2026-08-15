import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { LightReflectiveCard } from '../common/LightReflectiveCard';

export const ProjectsSection = () => {
  const majorProjects = [
    {
      num: "01",
      category: "PKI / X.509",
      id: "pki-ca-infra",
      title: "Custom Multi-Tier PKI Infrastructure",
      description: "A multi-level certificate authority system with automated certificate issuance, revocation, and trust validation.",
      techString: "Bouncy Castle · Java · OpenSSL · X.509 v3 · OCSP"
    },
    {
      num: "02",
      category: "Cryptography",
      id: "crypto-primitives-lib",
      title: "From-Scratch Cryptographic Primitives & X.509 Engine",
      description: "Asymmetric and symmetric algorithms implemented from the ground up alongside an RFC 5280-compliant certificate parser with constant-time math.",
      techString: "C · Python · Constant-Time Math · RFC 5280"
    },
    {
      num: "03",
      category: "Protocol Security",
      id: "tls13-analyzer-hardening",
      title: "TLS 1.3 Deep Protocol Hardening",
      description: "A hardened TLS 1.3-only server deployment with forward secrecy enforcement, packet-level Wireshark dissection, and post-quantum hybrid evaluation.",
      techString: "Java / Jetty · Wireshark · OpenSSL · Kyber-768"
    },
    {
      num: "04",
      category: "Systems & Low-Level",
      id: "x86-cpu-simulator",
      title: "x86 Assembly CPU Simulator",
      description: "A virtual x86 microprocessor simulator in C implementing the fetch-decode-execute cycle alongside memory bounds protection.",
      techString: "C99 · x86 Assembly · GDB · Valgrind"
    }
  ];

  return (
    <section id="work" className="section-wrapper">
      <div className="personal-container">
        
        {/* Section Heading */}
        <div className="section-header space-y-3">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
            Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Systems &amp; Cryptography
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Projects exploring low-level security, protocol implementations, 
            and cryptographic systems built from first principles.
          </p>
        </div>

        {/* Guaranteed 24px Spacing with Refined Project Cards */}
        <div className="card-list">
          {majorProjects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="block no-underline"
            >
              <LightReflectiveCard className="cursor-pointer space-y-4">
                {/* Category */}
                <div className="text-xs font-mono text-zinc-500">
                  {project.num} — {project.category}
                </div>

                {/* Title with Subtle Hover Transition */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 text-base leading-relaxed max-w-3xl font-normal">
                  {project.description}
                </p>

                {/* Technologies & Link with Micro-Nudge */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800/60 text-xs font-mono">
                  <span className="text-zinc-500">
                    {project.techString}
                  </span>

                  <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-zinc-100 transition-colors font-medium">
                    <span>View project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </LightReflectiveCard>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
