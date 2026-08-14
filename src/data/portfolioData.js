export const initialPortfolioData = {
  profile: {
    name: "Varun Chinthanippu",
    title: "Applied Cryptography & PKI Systems Engineer",
    eyebrow: "APPLIED CRYPTOGRAPHY / PKI / SECURITY SYSTEMS ENGINEERING",
    location: "Hyderabad, Telangana, India",
    email: "varunch.1729@gmail.com",
    phone: "+91 9885678911",
    status: "OPEN TO ROLES // APPLIED CRYPTOGRAPHY & PKI",
    education: {
      institution: "Anurag University",
      degree: "B.Tech in Computer Science Engineering (CSE)",
      location: "Hyderabad, Telangana",
      period: "2022 – 2026",
      details: "Specializing in Applied Cryptography, Distributed Security, and Low-Level Systems."
    },
    links: {
      github: "https://github.com/varunchinthanippu",
      linkedin: "https://linkedin.com/in/varunchinthanippu",
      tryhackme: "https://tryhackme.com/p/varunch",
      cryptohack: "https://cryptohack.org/user/varunch",
      spoj: "https://www.spoj.com/users/varunch",
      leetcode: "https://leetcode.com/varunch",
      projecteuler: "https://projecteuler.net"
    },
    pgpKeyFingerprint: "4A9F 82C1 D3E7 90B2 5F18  71AA 0192 489C BE2F 1729",
    summary: "Applied cryptography and PKI engineer specializing in custom Certificate Authority systems, X.509 lifecycle automation, low-level cryptographic engines, and TLS 1.3 protocol hardening. Experienced in mitigating MITM, certificate forgery, and side-channel vulnerabilities while exploring post-quantum lattice cryptography (ML-KEM/Kyber, Dilithium) and verifiable zero-knowledge computation."
  },

  domains: [
    {
      id: "pki",
      title: "PKI & Certificate Architecture",
      subtitle: "Root/Intermediate CAs, X.509 v3, automated revocation, and mTLS trust pipelines.",
      technologies: ["X.509 v3", "Root/Intermediate CA", "CRL / OCSP / OCSP Stapling", "RFC 5280 / RFC 6818", "Bouncy Castle PKIX", "OpenSSL", "EJBCA Concepts", "mTLS"],
      projectEvidence: "Custom PKI Infrastructure with Multi-Level Certificate Authority",
      evidenceId: "pki-ca-infra"
    },
    {
      id: "crypto-primitives",
      title: "Applied Cryptography & Primitives",
      subtitle: "From-scratch implementation of asymmetric, symmetric, and hashing algorithms with side-channel defenses.",
      technologies: ["RSA-OAEP", "ECDSA / ECDH (P-256)", "AES-GCM / ChaCha20", "SHA-256 / SHA-3", "Constant-Time Math", "Montgomery Reduction", "HKDF / PBKDF2"],
      projectEvidence: "From-Scratch Cryptographic Primitives & X.509 Engine",
      evidenceId: "crypto-primitives-lib"
    },
    {
      id: "pqc",
      title: "Post-Quantum Cryptography & Agility",
      subtitle: "Evaluating NIST standardized lattice-based key encapsulation and hybrid TLS migration models.",
      technologies: ["ML-KEM (Kyber-768/1024)", "ML-DSA (Dilithium)", "Hybrid Key Exchange (Kyber + X25519)", "Crypto-Agility", "NIST FIPS 203/204"],
      projectEvidence: "Post-Quantum Cryptography Migration: Hybrid TLS 1.3 Trade-offs Whitepaper",
      evidenceId: "pqc-hybrid-tls"
    },
    {
      id: "protocol-sec",
      title: "Protocol Hardening & Network Security",
      subtitle: "Deep packet inspection, forward secrecy enforcement, and legacy cipher elimination.",
      technologies: ["TLS 1.3 Handshake", "Wireshark Packet Analysis", "HSTS / PFS Enforcement", "0-RTT Replay Mitigation", "Jetty / Nginx Hardening"],
      projectEvidence: "TLS 1.3 Deep Protocol Hardening & Wireshark Analyzer",
      evidenceId: "tls13-analyzer-hardening"
    },
    {
      id: "systems",
      title: "Low-Level Systems & Exploit Mitigation",
      subtitle: "Hardware simulator design, kernel hardening, memory bounds validation, and custom OS builds.",
      technologies: ["C99 / C++", "x86 Assembly", "Linux Kernel Internals", "Linux From Scratch (LFS)", "GDB / Valgrind", "Memory Bounds Checks"],
      projectEvidence: "x86 Assembly CPU Simulator with Hardware Security Controls",
      evidenceId: "x86-cpu-simulator"
    },
    {
      id: "devsecops",
      title: "DevSecOps & Secure Pipelines",
      subtitle: "High-throughput authenticated file encryption pipelines and container security baseline automation.",
      technologies: ["Java 17 Multithreading", "Docker", "PBKDF2 Key Derivation", "HMAC-SHA256", "STRIDE Threat Modeling", "SAST / DAST"],
      projectEvidence: "Zipper – DevSecOps High-Throughput Encryption Pipeline",
      evidenceId: "zipper-devsecops"
    }
  ],

  projects: [
    {
      id: "pki-ca-infra",
      category: "PKI & Certificate Architecture",
      categoryShort: "PKI / X.509",
      title: "Custom Multi-Tier PKI Infrastructure & CA System",
      summary: "Engineered a multi-level X.509 v3 Certificate Authority hierarchy with automated CRL & OCSP revocation workflows and strict mutual TLS validation.",
      impact: "Automated certificate issuance and CRL/OCSP revocation; eliminated certificate forgery vectors in adversarial simulations.",
      techStack: ["Bouncy Castle PKIX", "Java", "OpenSSL", "X.509 v3", "OCSP Stapling", "mTLS", "RFC 5280"],
      problem: "Traditional flat certificate setups lack separation of trust, making root compromise fatal and lacking real-time revocation verification at line rate.",
      architecture: "Air-gapped Root CA signs intermediate issuing CAs; intermediate CAs issue end-entity certificates validated via real-time OCSP responders and CRL distribution points.",
      implementation: "Built using Java with Bouncy Castle PKIX APIs. Configured RFC 5280 path validation rules including BasicConstraints (cA=TRUE, pathLenConstraint), KeyUsage, ExtendedKeyUsage, and CRL/OCSP AIA extensions.",
      securityConsiderations: "Enforced strict signature verification, path length constraints, certificate validity window checks, and OCSP Stapling to prevent revocation bypass during handshake.",
      challenges: "Interoperability between Java Bouncy Castle ASN.1 structures and native OpenSSL CLI tools during cross-verification of DER/PEM encoding.",
      results: "Achieved 100% detection of simulated MITM and expired/revoked certificate injection in automated test suites.",
      links: {
        github: "https://github.com/varunchinthanippu/custom-pki-infrastructure",
        demo: "#"
      }
    },
    {
      id: "crypto-primitives-lib",
      category: "Applied Cryptography",
      categoryShort: "Cryptography",
      title: "From-Scratch Cryptographic Primitives & X.509 Engine",
      summary: "Implemented core asymmetric (RSA, ECDSA, ECDH) and symmetric (AES-GCM) algorithms and an RFC 5280-compliant certificate parser from the ground up.",
      impact: "Designed with side-channel mitigation and constant-time execution patterns for key operations, tested under adversarial fuzzing.",
      techStack: ["C", "Python", "Java", "SageMath", "RFC 5280", "Constant-Time Math"],
      problem: "Black-box cryptographic libraries obscure mathematical vulnerabilities such as non-constant-time modular operations and improper nonce reuse.",
      architecture: "Layered from raw arbitrary-precision arithmetic through group operations (elliptic curve point multiplication) to high-level authenticated encryption envelopes.",
      implementation: "Implemented RSA key generation with Miller-Rabin primality testing, Montgomery modular multiplication, ECDSA over NIST P-256 with deterministic nonces (RFC 6979), and AES-256-GCM AEAD.",
      securityConsiderations: "Mitigated timing side-channels via constant-time modular arithmetic and table lookups; enforced mandatory authentication tags on all ciphertext envelopes.",
      challenges: "Constructing an RFC 5280-compliant ASN.1 DER parser capable of handling nested SEQUENCE, OID, and UTCTime/GeneralizedTime structures safely without buffer overreads.",
      results: "Successfully validated all primitive outputs against NIST CAVP test vectors and RFC 5280 reference test certificates.",
      links: {
        github: "https://github.com/varunchinthanippu/crypto-primitives-from-scratch",
        demo: "#"
      }
    },
    {
      id: "tls13-analyzer-hardening",
      category: "Protocol Security",
      categoryShort: "TLS 1.3",
      title: "TLS 1.3 Deep Protocol Hardening & Wireshark Analyzer",
      summary: "Engineered and benchmarked a TLS 1.3-only server deployment with forward secrecy, OCSP stapling, and packet-level handshake analysis.",
      impact: "Enforced Perfect Forward Secrecy across all connections and benchmarked AES-GCM vs ChaCha20-Poly1305 throughput under varying latency.",
      techStack: ["Java / Jetty", "Wireshark", "OpenSSL", "Let's Encrypt", "HSTS", "Kyber/X25519"],
      problem: "Legacy TLS configurations permit protocol downgrade attacks, weak cipher negotiation, and handshake metadata leakage.",
      architecture: "Strict TLS 1.3-exclusive web service with Ephemeral Diffie-Hellman / Kyber key shares, OCSP stapling, and HSTS preload headers.",
      implementation: "Configured TLS 1.3 cipher suites (TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256). Dissected ClientHello, ServerHello, EncryptedExtensions, and Finished frames in Wireshark.",
      securityConsiderations: "Eliminated RSA key exchange (ensuring PFS), removed legacy compression (BREACH mitigation), and enforced 0-RTT anti-replay controls.",
      challenges: "Evaluating post-quantum hybrid key encapsulation (Kyber-768 + X25519) packet fragmentation across standard network MTUs.",
      results: "Zero legacy protocol exposure, validated 1-RTT handshake negotiation, and documented performance benchmarks across x86 and ARM platforms.",
      links: {
        github: "https://github.com/varunchinthanippu/tls13-protocol-hardening",
        demo: "#"
      }
    },
    {
      id: "zipper-devsecops",
      category: "DevSecOps & Secure Pipelines",
      categoryShort: "DevSecOps",
      title: "Zipper – DevSecOps High-Throughput Encryption Pipeline",
      summary: "Engineered a multithreaded file encryption tool for sensitive data at rest using AES-256-CBC, PBKDF2 key derivation, and HMAC-SHA256 integrity tags.",
      impact: "Reduced payload size by 60% via integrated ZIP compression while accelerating throughput by 25% across multi-gigabyte datasets.",
      techStack: ["Java 17", "Docker", "AES-256-CBC", "PBKDF2", "HMAC-SHA256", "Multithreading"],
      problem: "Standard encryption scripts often use weak key derivation iterations, lack integrity tags (vulnerable to bit-flipping), or block single-threaded I/O.",
      architecture: "Producer-consumer multithreaded chunking pipeline: streaming plaintext into memory-bounded buffers, applying PBKDF2 derived keys, AES-256 encryption, and HMAC authentication tags.",
      implementation: "Implemented in Java 17 using thread pools and non-blocking I/O. Containerized with Docker for straightforward integration into CI/CD build gates.",
      securityConsiderations: "Enforced 600,000+ PBKDF2 iterations with unique per-file salts; authenticated ciphertext envelopes to prevent padding oracle attacks.",
      challenges: "Synchronizing parallel file chunk streams without incurring lock contention or memory bloat on large archive payloads.",
      results: "25% performance improvement on multi-gigabyte datasets; 60% compression ratio; containerized for zero-dependency CI/CD deployment.",
      links: {
        github: "https://github.com/varunchinthanippu/zipper-encryption-pipeline",
        demo: "#"
      }
    },
    {
      id: "x86-cpu-simulator",
      category: "Systems & Low-Level Security",
      categoryShort: "Systems / x86",
      title: "x86 Assembly CPU Simulator with Hardware Security Controls",
      summary: "Built a virtual x86 microprocessor simulator in C from scratch, implementing the fetch-decode-execute cycle with memory bounds validation and privilege checks.",
      impact: "Demonstrated deep mastery of memory corruption primitives (stack buffer overflows, ROP gadgets) and hardware-level privilege enforcement.",
      techStack: ["C99", "x86 Assembly", "GDB", "Valgrind", "Memory Architecture", "Exploit Mitigations"],
      problem: "Software developers frequently introduce memory corruption bugs without understanding low-level hardware boundary enforcement and stack frame mechanics.",
      architecture: "Emulated CPU registers (EAX, EBX, ECX, EDX, ESP, EBP, EIP, EFLAGS), 64KB virtual address space, instruction decoder, ALU, and memory protection unit.",
      implementation: "Implemented fetch-decode-execute cycle in C99. Added custom instruction trap handlers to emulate non-executable stack (NX/DEP) and bounds checks on pointer arithmetic.",
      securityConsiderations: "Enforced privilege level checks between ring 0 and ring 3 instructions; intercepted out-of-bounds stack writes before register corruption.",
      challenges: "Accurately emulating the x86 EFLAGS register state (Zero, Carry, Overflow, Sign flags) across complex arithmetic and logical instructions.",
      results: "Zero memory leaks verified via Valgrind; successfully simulated and neutralized stack buffer overflow exploit payloads in sandbox tests.",
      links: {
        github: "https://github.com/varunchinthanippu/x86-cpu-simulator-security",
        demo: "#"
      }
    },
    {
      id: "linux-from-scratch",
      category: "Systems & Kernel Hardening",
      categoryShort: "Systems / LFS",
      title: "Hardened Linux From Scratch (LFS) Build Automation",
      summary: "Compiled a minimal, bootable Linux operating system from source code (Linux kernel, glibc, GNU toolchain) with automated baseline security hardening.",
      impact: "Minimized kernel attack surface by removing unused drivers and modules; reduced setup time by 15% via modular Bash automation.",
      techStack: ["Linux Kernel", "Bash", "glibc", "SELinux Basics", "CIS Benchmarks", "iptables/nftables"],
      problem: "Standard Linux distributions contain hundreds of unnecessary background daemons and kernel drivers that expand the attack surface.",
      architecture: "Cross-compiled monolithic toolchain, stripped minimal userland, hardened monolithic Linux kernel, and automated post-build hardening scripts.",
      implementation: "Authored modular Bash automation scripts to compile binutils, GCC, and glibc. Configured Linux kernel with unneeded modules disabled and strict sysctl parameters.",
      securityConsiderations: "Enforced ASLR, kASLR, restrictive umask, disabled core dumps, enforced non-root service execution, and configured restrictive nftables firewall rules.",
      challenges: "Resolving circular dependencies during cross-toolchain bootstrapping and ensuring deterministic, reproducible builds from raw source archives.",
      results: "Created a lean, bootable, hardened Linux environment adhering to CIS Benchmark security baselines with 15% faster build automation.",
      links: {
        github: "https://github.com/varunchinthanippu/hardened-lfs-automation",
        demo: "#"
      }
    }
  ],

  research: [
    {
      id: "zk-snark-paper",
      area: "Zero-Knowledge Proofs & Verifiable Computation",
      title: "Privacy-Preserving Verification Using zk-SNARKs & Circom",
      venue: "Anurag University Technical Publication",
      year: "2025",
      status: "Published & Open Source",
      abstract: "Explores zero-knowledge succinct non-interactive arguments of knowledge (zk-SNARKs) to achieve verifiable computation without revealing private witness data. Engineered custom arithmetic circuits in Circom and integrated SnarkJS for client-side cryptographic proof generation and Groth16 verification.",
      technologies: ["Zero-Knowledge Proofs", "Circom", "SnarkJS", "Groth16", "R1CS Arithmetic Circuits", "Privacy Engineering"],
      paperLink: "https://github.com/varunchinthanippu/zk-snark-privacy-proofs",
      readTime: "8 min read"
    },
    {
      id: "pqc-hybrid-tls",
      area: "Post-Quantum Cryptography & Protocol Migration",
      title: "Post-Quantum Cryptography Migration: Hybrid TLS 1.3 Trade-offs",
      venue: "Applied Cryptography Research Notes",
      year: "2025",
      status: "Technical Whitepaper",
      abstract: "An exhaustive comparative evaluation of NIST standardized post-quantum key encapsulation mechanisms (ML-KEM / Kyber-512/768/1024) integrated alongside classical ECDH (Curve25519). Analyzes packet fragmentation, MTU boundaries, and handshake latency under high-loss network conditions to mitigate 'harvest now, decrypt later' threats.",
      technologies: ["Post-Quantum Cryptography", "ML-KEM (Kyber)", "ML-DSA (Dilithium)", "Hybrid Key Exchange", "TLS 1.3 Performance"],
      paperLink: "https://github.com/varunchinthanippu/pqc-hybrid-migration-analysis",
      readTime: "12 min read"
    },
    {
      id: "x509-compliance-study",
      area: "PKI Standards & Certificate Governance",
      title: "RFC 5280 Compliance & Certificate Transparency Auditing",
      venue: "Security Engineering Analysis",
      year: "2024",
      status: "Protocol Study",
      abstract: "Detailed architectural breakdown of X.509 v3 extensions (BasicConstraints, KeyUsage, SubjectAltName, NameConstraints) and Certificate Transparency (CT) log verification to prevent rogue intermediate CA issuance and enforce strict trust chain path validation.",
      technologies: ["X.509 v3", "RFC 5280 / RFC 6818", "Certificate Transparency", "CAB Forum Guidelines", "Revocation Mechanics"],
      paperLink: "https://github.com/varunchinthanippu/x509-rfc5280-compliance",
      readTime: "10 min read"
    }
  ],

  competitiveCtf: {
    overview: "Demonstrated offensive security and algorithmic problem solving through top global rankings across competitive hacking and mathematical cryptography platforms.",
    platforms: [
      {
        name: "TryHackMe",
        handle: "varunch",
        badge: "Top 2% Global",
        score: "Global Rank ~Top 2%",
        accent: "emerald",
        focus: "Offensive Security, Network Penetration Testing, Privilege Escalation, PKI/Crypto Rooms",
        stats: [
          { label: "Standing", value: "Top 2% Globally" },
          { label: "Rooms Solved", value: "85+" },
          { label: "Specialty", value: "Crypto / MITM / Linux" }
        ],
        link: "https://tryhackme.com/p/varunch"
      },
      {
        name: "CryptoHack",
        handle: "varunch",
        badge: "Top 5% Global (2800 Pts)",
        score: "2,800+ Points",
        accent: "emerald",
        focus: "RSA Factorization, Elliptic Curve Cryptography, Discrete Logarithms, AES Modes",
        stats: [
          { label: "Score", value: "2,800+ Points" },
          { label: "Global Rank", value: "Top 5%" },
          { label: "Mastered", value: "ECC, RSA, Symmetric" }
        ],
        link: "https://cryptohack.org/user/varunch"
      },
      {
        name: "SPOJ",
        handle: "varunch",
        badge: "Advanced Algorithms",
        score: "Top Algorithmist",
        accent: "emerald",
        focus: "Number Theory, Modular Arithmetic, Prime Generation, Graph Algorithms",
        stats: [
          { label: "Focus", value: "Number Theoretic Crypto" },
          { label: "Topics", value: "Modular Inverses, CRT" }
        ],
        link: "https://www.spoj.com/users/varunch"
      },
      {
        name: "LeetCode & Euler",
        handle: "varunch",
        badge: "Math & Bit Manipulation",
        score: "Algorithms",
        accent: "emerald",
        focus: "Modular arithmetic, bitwise operations, BigInt algorithms, computational number theory",
        stats: [
          { label: "Focus", value: "High-Efficiency Math" },
          { label: "Euler Problems", value: "Prime & Factorization" }
        ],
        link: "https://leetcode.com/varunch"
      }
    ]
  },

  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      issuer: "Oracle Corporation",
      year: "2025",
      badgeId: "OCI-DEV-2025",
      type: "Cloud Security & CI/CD",
      link: "https://catalog-education.oracle.com"
    },
    {
      title: "Stanford Cryptography I",
      issuer: "Stanford University / Coursera (Prof. Dan Boneh)",
      year: "2024",
      badgeId: "STANFORD-CRYPTO",
      type: "Theoretical & Applied Cryptography",
      link: "https://coursera.org"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      year: "2024",
      badgeId: "CISCO-CCNA-NET",
      type: "Enterprise Networking & Security",
      link: "https://cisco.com"
    },
    {
      title: "Hardware and Operating Systems",
      issuer: "IBM / edX",
      year: "2023",
      badgeId: "IBM-HW-OS",
      type: "Low-Level Architecture & Systems",
      link: "https://edx.org"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Smart Interviews",
      year: "2024",
      badgeId: "SI-DSA-ADV",
      type: "High-Performance Algorithms",
      link: "https://smartinterviews.in"
    }
  ],

  leadership: {
    role: "Vice Chair",
    organization: "IEEE Computer Society Student Branch Chapter",
    impact: "Organized technical workshops and competitive bootcamps on cybersecurity, ethical hacking, and systems programming for 250+ student engineers."
  },

  resumes: [
    {
      id: "pki-crypto",
      roleTitle: "Applied Cryptography & PKI Specialist",
      tag: "Focus: PKI, X.509, TLS 1.3, PQC",
      badgeColor: "emerald",
      highlights: [
        "Architected multi-tier X.509 v3 Certificate Authority hierarchy with automated CRL & OCSP revocation enforcement.",
        "Engineered TLS 1.3-only server deployment with forward secrecy, OCSP stapling, and HSTS.",
        "Implemented RSA, ECDSA, and ECDH cryptographic primitives from scratch in Java, Python, and C with side-channel mitigation.",
        "Researched ML-KEM (Kyber) and Dilithium post-quantum algorithms and hybrid TLS migration constraints."
      ],
      coreSkills: [
        "X.509 v3 Certificates", "Root & Intermediate CA", "CRL / OCSP / OCSP Stapling",
        "TLS 1.3 Handshake", "AES-GCM / ChaCha20-Poly1305", "RSA / ECC / EdDSA",
        "OpenSSL / EJBCA Concepts", "Bouncy Castle PKIX", "Post-Quantum (ML-KEM / Dilithium)", "Wireshark Handshake Analysis"
      ]
    },
    {
      id: "systems-devsecops",
      roleTitle: "Systems & DevSecOps / Offensive Security Engineer",
      tag: "Focus: Low-Level C/Assembly, Kernel, CI/CD, CTFs",
      badgeColor: "emerald",
      highlights: [
        "Built an x86 Assembly CPU Simulator in C from scratch with memory bounds validation and buffer overflow defense.",
        "Compiled a minimal, hardened Linux From Scratch (LFS) distribution from raw kernel, glibc, and toolchain sources.",
        "Developed Zipper – a multithreaded DevSecOps AES-256-CBC + HMAC encryption pipeline with Docker integration.",
        "Top 2% globally on TryHackMe, Top 5% (2800 Pts) on CryptoHack, advanced problem solver on SPOJ."
      ],
      coreSkills: [
        "C / C++ / x86 Assembly", "Linux Kernel Internals", "Linux From Scratch (LFS)",
        "Docker & Container Security", "CI/CD Pipeline Hardening", "Threat Modeling (STRIDE/PASTA)",
        "Burp Suite / OWASP ZAP", "SAST / DAST (Semgrep / Trivy)", "SIEM (ELK / Splunk)", "Bash Automation"
      ]
    },
    {
      id: "enterprise-architect",
      roleTitle: "Enterprise Security & Protocol Architect",
      tag: "Focus: Scalable PKI, Compliance, Zero-Knowledge, Cloud",
      badgeColor: "emerald",
      highlights: [
        "Engineered RFC 5280-compliant certificate validation and parsing engines for enterprise deployments.",
        "Researched and implemented zk-SNARK privacy-preserving proof circuits using Circom and SnarkJS.",
        "Certified Oracle Cloud Infrastructure 2025 DevOps Professional and Stanford Cryptography certified.",
        "Benchmarked hybrid post-quantum cipher suites (Kyber + X25519) under simulated network latency conditions."
      ],
      coreSkills: [
        "Enterprise PKI Architecture", "RFC 5280 / RFC 6818", "CAB Forum Guidelines",
        "Zero-Knowledge Proofs (zk-SNARKs)", "HSM Key Management Concepts", "OCI Cloud Security",
        "Let's Encrypt / ACME", "SageMath Prototyping", "eBPF Basics", "Crypto-Agility Strategy"
      ]
    }
  ]
};
