import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/60 py-12 text-xs text-zinc-500 font-sans">
      <div className="personal-container flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-zinc-300 font-medium text-sm">
          Varun Chinthanippu
        </div>

        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://github.com/varunchinthanippu"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/varunchinthanippu"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:varunch.1729@gmail.com"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};
