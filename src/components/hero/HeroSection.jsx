import React from 'react';
import { SignatureDecryptionTitle } from '../common/SignatureDecryptionTitle';

export const HeroSection = ({ profile }) => {
  return (
    <section id="home" className="pt-36 sm:pt-44 pb-16 sm:pb-20">
      <div className="personal-container">
        
        <div className="max-w-2xl space-y-7">
          
          {/* Eyebrow */}
          <div>
            <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
              Varun Chinthanippu
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.18]">
            I build software, systems, and cryptographic tools.
          </h1>

          {/* Signature Decryption Title (Resolves once on page load) */}
          <div className="text-base sm:text-lg">
            <SignatureDecryptionTitle 
              targetText="Applied Cryptography & Systems Engineering" 
              durationMs={800} 
            />
          </div>

          {/* Concise Narrative (Ends naturally without buttons) */}
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            I work across software, applied cryptography, and systems security. 
            I'm interested in understanding how things work beneath the abstractions—from 
            custom <strong className="text-white font-medium">X.509 PKI trust architectures</strong> and 
            <strong className="text-white font-medium"> TLS 1.3 protocol internals</strong> to virtual microprocessor 
            emulators and post-quantum lattice primitives.
          </p>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
