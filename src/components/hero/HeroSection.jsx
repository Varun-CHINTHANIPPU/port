import React from 'react';
import { ArrowDown } from 'lucide-react';
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
              durationMs={750} 
            />
          </div>

          {/* Concise Narrative */}
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            I work across software, applied cryptography, and systems security. 
            I'm interested in understanding how things work beneath the abstractions—from 
            custom <strong className="text-white font-medium">X.509 PKI trust architectures</strong> and 
            <strong className="text-white font-medium"> TLS 1.3 protocol internals</strong> to virtual microprocessor 
            emulators and post-quantum lattice primitives.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
            <a
              href="#work"
              className="clean-btn clean-btn-primary py-2.5 px-5 text-sm cursor-pointer"
            >
              <span>Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#research"
              className="clean-btn py-2.5 px-5 text-sm cursor-pointer"
            >
              <span>Research</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
