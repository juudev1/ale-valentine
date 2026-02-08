import React from 'react';

export const StarryBackground = () => {
  // Generate random stars
  const stars = Array.from({ length: 150 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    opacity: Math.random()
  }));

  return (
    <div className="absolute inset-0 bg-[#0f172a] overflow-hidden pointer-events-none -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full w-1 h-1 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
            opacity: star.opacity
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};
