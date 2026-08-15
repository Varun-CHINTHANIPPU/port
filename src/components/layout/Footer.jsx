import React from 'react';
import { 
  Mail, 
  Code2, 
  Terminal, 
  KeyRound,
  Binary
} from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/varunchinthanippu",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      ariaLabel: "GitHub profile"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/varunchinthanippu",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      ariaLabel: "LinkedIn profile"
    },
    {
      name: "Email",
      url: "mailto:varunch.1729@gmail.com",
      icon: <Mail className="w-4 h-4" />,
      ariaLabel: "Send an email"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/varunch/",
      icon: <Code2 className="w-4 h-4" />,
      ariaLabel: "LeetCode profile"
    },
    {
      name: "CryptoHack",
      url: "https://cryptohack.org/user/varamm",
      icon: <KeyRound className="w-4 h-4" />,
      ariaLabel: "CryptoHack profile"
    },
    {
      name: "TryHackMe",
      url: "https://tryhackme.com/p/varunch",
      icon: <Terminal className="w-4 h-4" />,
      ariaLabel: "TryHackMe profile"
    },
    {
      name: "SPOJ",
      url: "https://www.spoj.com/users/varunch",
      icon: <Binary className="w-4 h-4" />,
      ariaLabel: "SPOJ profile"
    }
  ];

  return (
    <footer className="border-t border-zinc-850/60 py-12 text-zinc-500 font-sans">
      <div className="personal-container flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Name Brand */}
        <div className="text-zinc-300 font-medium text-sm">
          Varun Chinthanippu
        </div>

        {/* Minimal Monochrome Icon Links with Hover Transition */}
        <div className="flex items-center gap-4 sm:gap-5">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.ariaLabel}
              title={item.name}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
