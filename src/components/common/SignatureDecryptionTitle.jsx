import React, { useState, useEffect } from 'react';

export const SignatureDecryptionTitle = ({ 
  targetText = "Applied Cryptography & Systems Engineering", 
  durationMs = 750 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isSweepActive, setIsSweepActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>/~=";

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / durationMs, 1);

      const targetLen = targetText.length;
      const fixedCount = Math.floor(progress * targetLen);

      let result = "";
      for (let i = 0; i < targetLen; i++) {
        if (i < fixedCount) {
          result += targetText[i];
        } else if (targetText[i] === " ") {
          result += " ";
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayText(targetText);
        // Trigger subtle one-time light sweep event
        setIsSweepActive(true);
        setTimeout(() => {
          setIsSweepActive(false);
          setIsFinished(true);
        }, 900); // 900ms subtle sweep duration
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [targetText, durationMs]);

  return (
    <span
      className={`font-mono font-medium tracking-tight inline-block transition-colors duration-500 ${
        isSweepActive
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 via-purple-300 to-zinc-300 animate-pulse'
          : isFinished
          ? 'text-zinc-300'
          : 'text-zinc-400'
      }`}
    >
      {displayText || targetText}
    </span>
  );
};
