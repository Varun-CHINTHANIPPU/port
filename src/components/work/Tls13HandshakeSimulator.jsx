import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

export const Tls13HandshakeSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handshakeSteps = [
    {
      title: "ClientHello + Ephemeral KeyShare",
      sender: "Client ──→ Server",
      packet: "ClientHello { SupportedGroups: [X25519, Kyber768], KeyShare: g^x, CipherSuites: [TLS_AES_256_GCM_SHA384] }",
      description: "The client initiates the connection, proposing supported cipher suites and transmitting its ephemeral public key share in the first round trip (0-RTT initiation)."
    },
    {
      title: "ServerHello + Ephemeral KeyShare",
      sender: "Server ──→ Client",
      packet: "ServerHello { SelectedCipher: TLS_AES_256_GCM_SHA384, KeyShare: g^y }",
      description: "The server selects the strongest cipher suite and responds with its ephemeral public key share g^y. Both parties compute the shared secret and derive Handshake Traffic Keys."
    },
    {
      title: "EncryptedExtensions",
      sender: "Server ──→ Client (Encrypted)",
      packet: "{ EncryptedExtensions: [ALPN: h2, ServerNameAck] }",
      description: "Handshake messages from this point forward are encrypted using Handshake Traffic Keys to prevent passive parameter inspection on the wire."
    },
    {
      title: "Certificate & CertificateVerify",
      sender: "Server ──→ Client (Encrypted)",
      packet: "{ Certificate: [X.509 Chain], CertificateVerify: ECDSA_Sign(Transcript_Hash) }",
      description: "The server delivers its X.509 certificate chain and signs the entire transcript using its private key (ECDSA/Ed25519) to authenticate ownership."
    },
    {
      title: "Finished Handshake Verification",
      sender: "Client ⇄ Server",
      packet: "{ Finished: HMAC(Handshake_Context) }",
      description: "Both parties verify an HMAC authentication tag over the entire transcript to confirm handshake integrity and derive Application Traffic Keys."
    },
    {
      title: "1-RTT Application Data Flow",
      sender: "Bidirectional Secure Channel",
      packet: "ApplicationData [ AES-256-GCM Encrypted Stream ]",
      description: "Mutual encrypted channel established in 1 round trip with Perfect Forward Secrecy (PFS)."
    }
  ];

  return (
    <div className="bg-[#0e0f14] border border-zinc-800/80 rounded-xl p-6 sm:p-8 space-y-6">
      
      {/* Header & Reset */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800 font-mono text-xs">
        <span className="text-zinc-300 font-medium">
          Step {currentStep + 1} of {handshakeSteps.length} — {handshakeSteps[currentStep].title}
        </span>
        <button
          onClick={() => setCurrentStep(0)}
          className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Reset flow"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Sequence Flow */}
      <div className="bg-zinc-950 p-5 sm:p-6 rounded-lg border border-zinc-850 font-mono text-xs space-y-3">
        <div className="flex justify-between text-zinc-500 pb-2.5 border-b border-zinc-900 font-semibold tracking-wider text-[11px]">
          <span>CLIENT</span>
          <span>SERVER</span>
        </div>

        <div className="space-y-2 pt-1">
          {handshakeSteps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`cursor-pointer p-3 rounded-md flex items-center justify-between transition-all ${
                idx === currentStep
                  ? 'bg-zinc-900 text-zinc-100 font-medium border border-zinc-700'
                  : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
              }`}
            >
              <span>{idx + 1}. {step.title}</span>
              <span className="text-xs text-zinc-500">{step.sender}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Narrative & Frame Details */}
      <div className="space-y-3 font-mono text-xs">
        <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-850 text-zinc-300 break-words leading-relaxed text-xs">
          {handshakeSteps[currentStep].packet}
        </div>

        <p className="text-zinc-300 font-sans text-sm sm:text-base pt-1 leading-relaxed">
          {handshakeSteps[currentStep].description}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between pt-3 border-t border-zinc-800 font-mono text-xs">
        <button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          className="clean-btn py-1.5 px-4 disabled:opacity-30 cursor-pointer"
        >
          Previous
        </button>

        <button
          disabled={currentStep === handshakeSteps.length - 1}
          onClick={() => setCurrentStep(Math.min(handshakeSteps.length - 1, currentStep + 1))}
          className="clean-btn clean-btn-primary py-1.5 px-4 disabled:opacity-30 cursor-pointer"
        >
          Next Step ❯
        </button>
      </div>

    </div>
  );
};

export default Tls13HandshakeSimulator;
