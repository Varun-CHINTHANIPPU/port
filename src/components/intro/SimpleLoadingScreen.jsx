import React, { useState, useEffect } from 'react';

export const SimpleLoadingScreen = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(onComplete, 350); // 350ms fade transition
    }, 850);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b] text-zinc-100 transition-opacity duration-350 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="space-y-4 text-center">
        <div className="text-base font-sans font-semibold tracking-tight text-zinc-100">
          VARUN CHINTHANIPPU
        </div>
        <div className="text-xs font-mono text-zinc-500 tracking-wider">
          initializing...
        </div>
      </div>
    </div>
  );
};
