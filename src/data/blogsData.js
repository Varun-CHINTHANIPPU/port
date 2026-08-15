export const initialBlogsData = [
  {
    slug: "building-an-x86-simulator",
    title: "Building an x86 Simulator in C: Emulating the CPU Cycle from Scratch",
    date: "January 2026",
    readTime: "7 min read",
    category: "Systems Programming",
    summary: "Reflections on implementing 32-bit registers, instruction decoding, and memory bounds protection in pure C without external virtualization libraries.",
    content: `
When writing systems code in high-level languages, it's easy to take CPU instruction pipelines and memory protection for granted. To demystify what actually happens during binary execution, I decided to build a virtual 32-bit x86 microprocessor emulator from scratch in C99.

### The Fetch-Decode-Execute Cycle

At its core, a microprocessor is an infinite loop that sequentially evaluates state machines:

1. **Fetch**: Read the byte at the current Instruction Pointer (\`EIP\`) from our simulated 64KB memory space.
2. **Decode**: Parse the opcode, determine addressing modes (immediate, register-direct, or register-indirect with ModR/M bytes), and extract operands.
3. **Execute**: Perform the arithmetic, logical, or branching operation via the Arithmetic Logic Unit (ALU), updating status flags in \`EFLAGS\`.

\`\`\`c
typedef struct {
    uint32_t eax, ebx, ecx, edx;
    uint32_t esp, ebp, esi, edi;
    uint32_t eip;
    uint32_t eflags;
    uint8_t  memory[65536]; // 64KB virtual address space
} CPUState;
\`\`\`

### Simulating EFLAGS Correctly

One of the trickiest parts was accurately modeling status flags after arithmetic operations:
- **Zero Flag (ZF)**: Set if the result equals 0.
- **Sign Flag (SF)**: Set to the most significant bit (\`result >> 31\`).
- **Carry Flag (CF)**: Set if unsigned addition overflowed or subtraction borrowed.
- **Overflow Flag (OF)**: Set if signed two's-complement arithmetic yielded an mathematically incorrect sign.

### Enforcing Memory Bounds & Non-Executable Stack

The most rewarding feature was integrating basic hardware-level defenses. By intercepting all write instructions targeting the stack frame area above \`ESP\`, the simulator catches out-of-bounds array writes before the saved return address is corrupted, simulating hardware Data Execution Prevention (DEP/NX).
    `
  },
  {
    slug: "constant-time-crypto-mistakes",
    title: "Why memcmp Will Leak Your Keys: The Realities of Constant-Time Math",
    date: "December 2025",
    readTime: "6 min read",
    category: "Applied Cryptography",
    summary: "An exploration of timing side-channels in standard C libraries, and how subtle branch instructions can compromise secret keys.",
    content: `
In standard application programming, early-exit comparisons like \`memcmp\` or \`==\` operators are optimizations. In cryptographic engineering, they are critical vulnerabilities.

### The Problem with Early Exits

Consider validating an HMAC authentication tag:

\`\`\`c
// VULNERABLE: Standard library returns on the first mismatched byte
int verify_hmac(const uint8_t *expected, const uint8_t *received, size_t len) {
    return memcmp(expected, received, len) == 0;
}
\`\`\`

If the first byte mismatches, \`memcmp\` terminates in ~2 nanoseconds. If the first 5 bytes match and the 6th mismatches, it takes ~10 nanoseconds. Over thousands of requests across a local network or shared cache, an attacker can brute-force an authentication tag byte-by-byte by observing latency deltas.

### Implementing Constant-Time Equality

To defend against timing attacks, comparisons must touch every single byte regardless of where mismatches occur:

\`\`\`c
int constant_time_memcmp(const uint8_t *a, const uint8_t *b, size_t len) {
    uint8_t diff = 0;
    for (size_t i = 0; i < len; i++) {
        diff |= (a[i] ^ b[i]);
    }
    return (1 & ((diff - 1) >> 8));
}
\`\`\`

By accumulating bitwise XOR differences without branching, the execution path and instruction count remain strictly identical regardless of input values.
    `
  },
  {
    slug: "demystifying-asn1-der-parsing",
    title: "Demystifying ASN.1 DER: Parsing X.509 Certificates from Scratch",
    date: "November 2025",
    readTime: "8 min read",
    category: "PKI & Standards",
    summary: "A practical guide to understanding Tag-Length-Value (TLV) encoding, recursive SEQUENCE headers, and safe ASN.1 parsing in C and Python.",
    content: `
X.509 digital certificates underpin the entire HTTPS public key infrastructure. Yet their underlying serialization format—Abstract Syntax Notation One (ASN.1) Distinguished Encoding Rules (DER)—is often considered notoriously complex.

### Tag-Length-Value (TLV) Basics

Every ASN.1 DER object is serialized in three sequential fields:
1. **Tag** (1 byte): Identifies the type (\`0x30\` for SEQUENCE, \`0x02\` for INTEGER, \`0x06\` for OBJECT IDENTIFIER, \`0x17\` for UTCTime).
2. **Length** (1 or more bytes): Specifies the exact byte length of the value field. Short form (lengths < 128) uses a single byte; long form uses a count byte followed by big-endian length bytes.
3. **Value**: The raw serialized payload.

### Handling Nested Certificate Structures

An X.509 v3 certificate is simply a nested hierarchy of TLV structures:

\`\`\`
Certificate (SEQUENCE)
├── TBSCertificate (SEQUENCE)
│   ├── Version (EXPLICIT [0])
│   ├── SerialNumber (INTEGER)
│   ├── SignatureAlgorithm (SEQUENCE)
│   ├── Issuer (SEQUENCE / Name)
│   ├── Validity (SEQUENCE)
│   ├── Subject (SEQUENCE / Name)
│   ├── SubjectPublicKeyInfo (SEQUENCE)
│   └── Extensions (EXPLICIT [3] OPTIONAL)
├── SignatureAlgorithm (SEQUENCE)
└── SignatureValue (BIT STRING)
\`\`\`

### Safe Parsing Principles

When building a DER parser from scratch, memory safety is paramount:
- Always enforce maximum nesting depth limits to prevent stack overflow from maliciously crafted recursive structures.
- Validate that the sum of child TLV lengths does not exceed the parent SEQUENCE boundary.
- Reject non-minimal length encodings (a strict DER requirement to ensure unique deterministic representation).
    `
  }
];
