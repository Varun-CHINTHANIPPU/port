import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { fetchLivePlatformStats } from '../../services/statsService';
import { LightReflectiveCard } from '../common/LightReflectiveCard';

export const ActivitySection = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchLivePlatformStats().then(setStats);
  }, []);

  if (!stats || stats.length === 0) return null;

  return (
    <section id="activity" className="section-wrapper">
      <div className="personal-container">
        
        {/* Section Header */}
        <div className="section-header space-y-3">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
            Platforms
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Activity &amp; Platforms
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Where I write code, solve mathematical cryptography challenges, and practice security engineering.
          </p>
        </div>

        {/* Quiet Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((item) => (
            <LightReflectiveCard
              key={item.platform}
              className="p-7 sm:p-8 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 font-medium">
                  {item.platform}
                </span>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-zinc-400 hover:text-zinc-100 flex items-center gap-1 transition-colors"
                >
                  <span>Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-zinc-100">
                  {item.value}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.secondaryValue}
                </p>
              </div>
            </LightReflectiveCard>
          ))}
        </div>

      </div>
    </section>
  );
};
