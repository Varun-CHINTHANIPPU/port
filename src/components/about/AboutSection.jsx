import React from 'react';
import { LightReflectiveCard } from '../common/LightReflectiveCard';

export const AboutSection = ({ profile, certifications }) => {
  return (
    <section id="about" className="section-wrapper pb-36 sm:pb-48">
      <div className="personal-container">
        
        {/* Section Header */}
        <div className="section-header space-y-4 mb-16">
          <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase font-semibold">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-7 text-zinc-300 text-lg sm:text-xl leading-[1.9]">
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

            <p className="text-zinc-400 text-base sm:text-lg">
              Currently, I am exploring post-quantum lattice-based key encapsulation (ML-KEM/Kyber) and 
              zero-knowledge succinct arguments of knowledge (zk-SNARKs).
            </p>
          </div>

          {/* Right Column: Education & Clear Accreditations */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Box */}
            <LightReflectiveCard className="p-8 sm:p-10 space-y-3">
              <span className="text-zinc-500 font-mono uppercase text-xs sm:text-sm tracking-wider font-semibold">Education</span>
              <div className="text-zinc-100 font-bold text-xl sm:text-2xl font-sans leading-snug">
                {profile.education.degree}
              </div>
              <div className="text-zinc-300 text-base font-normal">
                {profile.education.institution} · <span className="text-zinc-500 font-mono text-sm">{profile.education.period}</span>
              </div>
              <div className="text-zinc-400 text-sm sm:text-base pt-2 leading-relaxed font-sans">
                {profile.education.details}
              </div>
            </LightReflectiveCard>

            {/* Accreditations with Clear, Readable Typography */}
            <LightReflectiveCard className="p-8 sm:p-10 space-y-6">
              <span className="text-zinc-500 font-mono uppercase text-xs sm:text-sm tracking-wider font-semibold block">Selected Accreditations</span>
              <div className="space-y-6">
                {certifications.slice(0, 4).map((cert) => (
                  <div key={cert.badgeId} className="space-y-1.5 border-b border-zinc-850 pb-4 last:border-0 last:pb-0">
                    <div className="text-zinc-100 font-sans font-semibold text-base sm:text-lg leading-snug">
                      {cert.title}
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-400">
                      <span>{cert.issuer}</span>
                      <span className="text-zinc-500 font-medium">{cert.year}</span>
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
