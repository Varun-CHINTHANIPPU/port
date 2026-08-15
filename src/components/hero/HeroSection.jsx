import React from 'react';
import { SignatureDecryptionTitle } from '../common/SignatureDecryptionTitle';

export const HeroSection = ({ profile }) => {
  return (
    <section id="home" className="hero-section">
      <div className="personal-container">
        
        <div className="max-w-3xl">
          
          {/* Main Heading */}
          <h1 className="hero-heading">
            I build software, systems, and cryptographic tools.
          </h1>

          {/* Role */}
          <div className="hero-role">
            <SignatureDecryptionTitle 
              targetText="Applied Cryptography & Systems Engineering" 
              durationMs={800} 
            />
          </div>

          {/* Narrative */}
          <p className="hero-description">
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
