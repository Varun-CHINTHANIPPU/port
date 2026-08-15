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

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed">
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

            <p className="text-zinc-400 text-sm sm:text-base">
              Currently, I am exploring post-quantum lattice-based key encapsulation (ML-KEM/Kyber) and 
              zero-knowledge succinct arguments of knowledge (zk-SNARKs).
            </p>
          </div>

          {/* Right Column: Education & Clear Accreditations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Box */}
            <LightReflectiveCard className="p-7 space-y-2.5">
              <span className="text-zinc-500 font-mono uppercase text-xs tracking-wider">Education</span>
              <div className="text-zinc-100 font-bold text-lg sm:text-xl font-sans leading-snug">
                {profile.education.degree}
              </div>
              <div className="text-zinc-300 text-sm font-normal">
                {profile.education.institution} · <span className="text-zinc-500 font-mono text-xs">{profile.education.period}</span>
              </div>
              <div className="text-zinc-400 text-xs sm:text-sm pt-1 leading-relaxed font-sans">
                {profile.education.details}
              </div>
            </LightReflectiveCard>

            {/* Accreditations with Clear, Readable Typography */}
            <LightReflectiveCard className="p-7 space-y-4">
              <span className="text-zinc-500 font-mono uppercase text-xs tracking-wider block">Selected Accreditations</span>
              <div className="space-y-4">
                {certifications.slice(0, 4).map((cert) => (
                  <div key={cert.badgeId} className="space-y-1 border-b border-zinc-850 pb-3 last:border-0 last:pb-0">
                    <div className="text-zinc-100 font-sans font-medium text-sm sm:text-base leading-snug">
                      {cert.title}
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>{cert.issuer}</span>
                      <span className="text-zinc-500">{cert.year}</span>
                    </div>
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

export default AboutSection;
