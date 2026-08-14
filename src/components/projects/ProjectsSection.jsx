import React, { useState } from 'react';
import { ArrowUpRight, GitBranch, X } from 'lucide-react';
import { LightReflectiveCard } from '../common/LightReflectiveCard';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const majorProjects = [
    {
      num: "01",
      category: "PKI / X.509",
      id: "pki-ca-infra",
      title: "Custom Multi-Tier PKI Infrastructure",
      description: "A multi-level certificate authority system with automated certificate issuance, revocation, and trust validation.",
      techString: "Bouncy Castle · Java · OpenSSL · X.509 v3 · OCSP",
      whatIBuilt: "I engineered a multi-tier Certificate Authority architecture featuring an offline root CA, issuing intermediate CAs, and automated CRL and OCSP revocation pipelines. The system generates and strictly validates X.509 v3 certificates across mutual TLS channels.",
      whatIFoundInteresting: "Implementing RFC 5280 path validation rules—specifically managing BasicConstraints, KeyUsage extensions, and handling real-time OCSP stapling during the TLS handshake without introducing latency bottlenecks.",
      github: "https://github.com/varunchinthanippu/custom-pki-infrastructure"
    },
    {
      num: "02",
      category: "Cryptography",
      id: "crypto-primitives-lib",
      title: "From-Scratch Cryptographic Primitives & X.509 Engine",
      description: "Asymmetric and symmetric algorithms implemented from the ground up alongside an RFC 5280-compliant certificate parser with constant-time math.",
      techString: "C · Python · Constant-Time Math · RFC 5280",
      whatIBuilt: "I built core cryptographic primitives (RSA-OAEP, ECDSA over NIST P-256 with deterministic RFC 6979 nonces, and AES-256-GCM) and an ASN.1 DER certificate parser from scratch in C and Python.",
      whatIFoundInteresting: "Mitigating timing side-channel attacks by enforcing constant-time modular arithmetic and table lookups, and safely parsing nested ASN.1 DER structures without memory buffer vulnerabilities.",
      github: "https://github.com/varunchinthanippu/crypto-primitives-from-scratch"
    },
    {
      num: "03",
      category: "Protocol Security",
      id: "tls13-analyzer-hardening",
      title: "TLS 1.3 Deep Protocol Hardening",
      description: "A hardened TLS 1.3-only server deployment with forward secrecy enforcement, packet-level Wireshark dissection, and post-quantum hybrid evaluation.",
      techString: "Java / Jetty · Wireshark · OpenSSL · Kyber-768",
      whatIBuilt: "I configured and benchmarked a TLS 1.3-exclusive web service eliminating legacy ciphers, with packet-level handshake dissection in Wireshark and post-quantum hybrid key exchange testing (Kyber-768 + Curve25519).",
      whatIFoundInteresting: "Analyzing how TLS 1.3 achieves 1-RTT handshake negotiation by combining ClientHello with ephemeral KeyShares, and measuring packet fragmentation trade-offs when larger post-quantum public keys are transmitted.",
      github: "https://github.com/varunchinthanippu/tls13-protocol-hardening"
    },
    {
      num: "04",
      category: "Systems & Low-Level",
      id: "x86-cpu-simulator",
      title: "x86 Assembly CPU Simulator",
      description: "A virtual x86 microprocessor simulator in C implementing the fetch-decode-execute cycle alongside memory bounds protection.",
      techString: "C99 · x86 Assembly · GDB · Valgrind",
      whatIBuilt: "I developed a 32-bit x86 microprocessor simulator in C from the ground up, emulating CPU registers (EAX, EBX, ESP, EBP, EFLAGS), instruction decoding, ALU operations, and memory protection boundaries.",
      whatIFoundInteresting: "Simulating hardware-level memory corruption defenses, specifically implementing non-executable stack (NX/DEP) checks and catching out-of-bounds pointer writes before register states are corrupted.",
      github: "https://github.com/varunchinthanippu/x86-cpu-simulator-security"
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

        {/* Guaranteed 24px Spacing with LightReflectiveCard */}
        <div className="card-list">
          {majorProjects.map((project) => (
            <LightReflectiveCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer space-y-4"
            >
              {/* Category */}
              <div className="text-xs font-mono text-zinc-500">
                {project.num} — {project.category}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-300 text-base leading-relaxed max-w-3xl font-normal">
                {project.description}
              </p>

              {/* Technologies & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800/60 text-xs font-mono">
                <span className="text-zinc-500">
                  {project.techString}
                </span>

                <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium">
                  <span>View project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </LightReflectiveCard>
          ))}
        </div>

        {/* Simplified Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#121318] border border-zinc-800 rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-7 sm:p-9 shadow-2xl relative space-y-6">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Category & Title */}
              <div className="space-y-1.5 pr-8">
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Overview */}
              <p className="text-zinc-300 text-base leading-relaxed">
                {selectedProject.description}
              </p>

              {/* WHAT I BUILT */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  What I Built
                </h4>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.whatIBuilt}
                </p>
              </div>

              {/* WHAT I FOUND INTERESTING */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  What I Found Interesting
                </h4>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.whatIFoundInteresting}
                </p>
              </div>

              {/* TECHNOLOGIES */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Technologies
                </h4>
                <div className="text-xs font-mono text-zinc-300">
                  {selectedProject.techString}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="clean-btn clean-btn-primary text-xs py-2 px-4"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="clean-btn text-xs py-2 px-4"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
