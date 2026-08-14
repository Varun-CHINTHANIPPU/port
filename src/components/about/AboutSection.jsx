import React from 'react';
import { LightReflectiveCard } from '../common/LightReflectiveCard';

export const AboutSection = ({ profile, certifications }) => {
  return (
    <section id="about" className="section-wrapper">
      <div className="personal-container">
        
        {/* Section Header */}
        <div className="section-header space-y-3">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
            Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Narrative & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-base leading-relaxed">
            <p>
              I am an engineering student and software builder based in Hyderabad, India. 
              I am currently pursuing my B.Tech in Computer Science Engineering at Anurag University.
            </p>

            <p>
              My engineering approach centers on building from first principles. Rather than relying solely on 
              high-level abstractions, I like understanding and implementing the underlying mechanics—from 
              implementing RSA, ECDSA, and AES cryptographic primitives from scratch in C and Java, to 
              writing virtual microprocessor emulators and compiling custom Linux operating systems.
            </p>

            <p>
              I also serve as the Vice Chair of the IEEE Computer Society Student Branch Chapter, 
              where I organize technical workshops and bootcamps on systems programming and cybersecurity.
            </p>

            <p className="text-zinc-400 text-sm">
              Currently, I am exploring post-quantum lattice-based key encapsulation (ML-KEM/Kyber) and 
              zero-knowledge succinct arguments of knowledge (zk-SNARKs).
            </p>
          </div>

          {/* Right Column: Education & Accreditations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Box */}
            <LightReflectiveCard className="p-6 sm:p-7 space-y-2 font-mono text-xs">
              <span className="text-zinc-500 uppercase text-[10px] tracking-wider">Education</span>
              <div className="text-zinc-100 font-bold text-base font-sans">
                {profile.education.degree}
              </div>
              <div className="text-zinc-400">
                {profile.education.institution} · {profile.education.period}
              </div>
              <div className="text-zinc-500 text-xs pt-1 font-sans">
                {profile.education.details}
              </div>
            </LightReflectiveCard>

            {/* Certifications (Compact Secondary List) */}
            <LightReflectiveCard className="p-6 sm:p-7 space-y-3 font-mono text-xs">
              <span className="text-zinc-500 uppercase text-[10px] tracking-wider block">Accreditations</span>
              <div className="space-y-2.5 text-xs">
                {certifications.slice(0, 4).map((cert) => (
                  <div key={cert.badgeId} className="flex items-start justify-between gap-2 border-b border-zinc-900 pb-2 last:border-0 last:pb-0">
                    <div>
                      <div className="text-zinc-200 font-sans font-medium">{cert.title}</div>
                      <div className="text-zinc-500">{cert.issuer}</div>
                    </div>
                    <span className="text-zinc-500 shrink-0">{cert.year}</span>
                  </div>
                ))}
              </div>
            </LightReflectiveCard>

          </div>

        </div>

      </div>
    </section>
  );
};
