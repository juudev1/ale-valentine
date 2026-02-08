import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export const Fireworks = () => {
  const intervalRef = useRef(null);

  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const runFireworks = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(intervalRef.current);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    };

    intervalRef.current = setInterval(runFireworks, 250);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <div className="absolute inset-0 pointer-events-none" />;
};
