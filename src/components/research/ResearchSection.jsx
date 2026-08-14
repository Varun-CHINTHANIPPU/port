import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LightReflectiveCard } from '../common/LightReflectiveCard';

export const ResearchSection = () => {
  const researchPapers = [
    {
      year: "2025",
      title: "Privacy-Preserving Verification with zk-SNARKs",
      summary: "A study of arithmetic circuits, Groth16, Circom, and client-side zero-knowledge proof generation without secret disclosure.",
      link: "https://github.com/varunchinthanippu/zk-snark-privacy-proofs"
    },
    {
      year: "2025",
      title: "Hybrid TLS 1.3 and Post-Quantum Migration",
      summary: "An investigation into ML-KEM (Kyber-768/1024), hybrid key exchange with Curve25519, packet fragmentation, and handshake latency.",
      link: "https://github.com/varunchinthanippu/pqc-hybrid-migration-analysis"
    },
    {
      year: "2024",
      title: "RFC 5280 Compliance and Certificate Transparency",
      summary: "An architectural breakdown of X.509 v3 extension constraints (BasicConstraints, KeyUsage) and Certificate Transparency auditing.",
      link: "https://github.com/varunchinthanippu/x509-rfc5280-compliance"
    }
  ];

  return (
    <section id="research" className="section-wrapper">
      <div className="personal-container">
        
        {/* Section Header */}
        <div className="section-header space-y-3">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
            Research &amp; Notes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Topics I Am Currently Exploring
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Notes and investigations on zero-knowledge proofs, post-quantum key exchange, 
            and certificate trust models.
          </p>
        </div>

        {/* Guaranteed 24px Gap on Card List */}
        <div className="card-list">
          {researchPapers.map((paper, idx) => (
            <LightReflectiveCard
              key={idx}
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono text-zinc-500">
                  {paper.year}
                </span>

                <h3 className="text-xl font-bold text-zinc-100">
                  {paper.title}
                </h3>

                <p className="text-zinc-300 text-base leading-relaxed font-normal">
                  {paper.summary}
                </p>
              </div>

              <a
                href={paper.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-zinc-100 flex items-center gap-1.5 transition-colors shrink-0 self-start sm:self-center font-medium"
              >
                <span>Read paper</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </LightReflectiveCard>
          ))}
        </div>

      </div>
    </section>
  );
};
