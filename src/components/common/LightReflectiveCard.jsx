import React, { useRef, useState } from 'react';

export const LightReflectiveCard = ({ 
  children, 
  className = "", 
  onClick, 
  as = "div",
  ...props 
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const Component = as;

  return (
    <Component
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`editorial-card relative overflow-hidden group ${className}`}
      {...props}
    >
      {/* Subtle Dynamic Light Reflection Layer (Deep Blue, Violet, Subtle Cyan) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 35%, rgba(56, 189, 248, 0.02) 65%, transparent 80%)`
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
};
