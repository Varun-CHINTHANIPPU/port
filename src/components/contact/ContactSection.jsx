import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LightReflectiveCard } from '../common/LightReflectiveCard';

export const ContactSection = ({ profile }) => {
  return (
    <section id="elsewhere" className="section-wrapper">
      <div className="personal-container">
        
        {/* Section Header */}
        <div className="section-header space-y-3">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
            Connect
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Elsewhere
          </h2>
        </div>

        {/* Links */}
        <LightReflectiveCard className="p-7 sm:p-9 max-w-xl">
          <div className="space-y-3.5 font-mono text-xs sm:text-sm">
            
            <div className="flex items-center justify-between py-2.5 border-b border-zinc-850">
              <span className="text-zinc-500">Email</span>
              <a 
                href={`mailto:${profile.email}`} 
                className="text-zinc-200 hover:text-white transition-colors"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex items-center justify-between py-2.5 border-b border-zinc-850">
              <span className="text-zinc-500">GitHub</span>
              <a 
                href={profile.links.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-200 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>github.com/varunchinthanippu</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

            <div className="flex items-center justify-between py-2.5 border-b border-zinc-850">
              <span className="text-zinc-500">LinkedIn</span>
              <a 
                href={profile.links.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-200 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>linkedin.com/in/varunchinthanippu</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-zinc-500">Location</span>
              <span className="text-zinc-300">{profile.location}</span>
            </div>

          </div>
        </LightReflectiveCard>

      </div>
    </section>
  );
};
