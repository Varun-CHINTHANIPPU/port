import React, { useState, useEffect } from 'react';
import { ArrowUpRight, GitCommit, ShieldCheck } from 'lucide-react';
import { fetchLivePlatformStats } from '../../services/statsService';
import { LightReflectiveCard } from '../common/LightReflectiveCard';

export const ActivitySection = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchLivePlatformStats().then(setStats);
  }, []);

  if (!stats || stats.length === 0) return null;

  return (
    <section id="activity" className="section-wrapper pb-36 sm:pb-48">
      <div className="personal-container">
        
        {/* Section Header */}
        <div className="section-header space-y-4 mb-16">
          <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase font-semibold">
            Platforms &amp; Activity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Activity &amp; Contributions
          </h2>
          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed">
            Where I write code, commit open-source systems, solve mathematical cryptography challenges, and practice security engineering.
          </p>
        </div>

        {/* Spacious 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {stats.map((item) => (
            <LightReflectiveCard
              key={item.platform}
              className="p-8 sm:p-10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                  {item.platform}
                </span>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>Profile</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

              <div className="space-y-2.5 pt-1">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                  {item.value}
                </h3>
                <p className="text-zinc-300 text-base leading-relaxed">
                  {item.secondaryValue}
                </p>
                {item.details && (
                  <p className="text-zinc-500 text-xs sm:text-sm font-mono pt-1">
                    {item.details}
                  </p>
                )}
              </div>
            </LightReflectiveCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ActivitySection;
