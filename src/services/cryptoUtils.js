// Web Crypto API and custom cryptographic helpers for the interactive sandbox

export const caesarCipher = (str, shift, decrypt = false) => {
  const s = decrypt ? (26 - (shift % 26)) % 26 : shift % 26;
  return str.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    const base = code >= 65 && code <= 90 ? 65 : 97;
    return String.fromCharCode(((code - base + s) % 26) + base);
  });
};

export const toHex = (str) => {
  return Array.from(new TextEncoder().encode(str))
    .map(b => b.toString(16).padStart(2, '0'))
    .join(' ');
};

export const toBase64 = (str) => {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch (e) {
    return btoa(str);
  }
};

export const fromBase64 = (str) => {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch (e) {
    return atob(str);
  }
};

export const computeSha256 = async (message) => {
  if (!window.crypto || !window.crypto.subtle) {
    return 'Web Crypto API unavailable in current environment';
  }
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export const simulateAesGcm = (plaintext, keyHex = '0x1729A4F8B2C9E1D3') => {
  const iv = Array.from({ length: 12 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
  const ciphertextBytes = Array.from(new TextEncoder().encode(plaintext)).map((b, i) => {
    const keyByte = (parseInt(keyHex.slice(2), 16) + i * 31) % 256;
    return (b ^ keyByte).toString(16).padStart(2, '0');
  }).join('');
  const authTag = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
  
  return {
    algorithm: 'AES-256-GCM',
    iv: `0x${iv}`,
    ciphertext: `0x${ciphertextBytes}`,
    authTag: `0x${authTag}`,
    authenticated: true
  };
};

export const generateEntropyNoise = (length = 32) => {
  const chars = '0123456789ABCDEF!@#$%^&*()_+-=~[]{}|;:,.<>?';
  let out = '';
  for (let i = 0; i < length; i++) {
    out += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return out;
};
