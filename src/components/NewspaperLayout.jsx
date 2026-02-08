import React from 'react';
import { Newspaper } from 'lucide-react';

export const NewspaperLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-serif p-4 md:p-8">
      <div className="max-w-7xl mx-auto border-t-4 border-b-4 border-black py-4">
        <header className="text-center mb-8 border-b-2 border-black pb-4 relative">
          <div className="flex justify-between items-center absolute w-full top-0 text-xs md:text-sm font-sans uppercase tracking-widest text-gray-500">
            <span>Vol. 143</span>
            <span>Est. 2025</span>
            <span>$Invaluable</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mt-8 mb-2 font-display tracking-tight">The Valentine Times</h1>
          <div className="flex justify-center items-center gap-4 text-sm md:text-base font-bold uppercase border-t border-black pt-2 mt-4">
            <span className="flex items-center gap-2"><Newspaper size={16} /> Última Hora</span>
            <span>•</span>
            <span>14 de Febrero, 2025</span>
            <span>•</span>
            <span>Edición Especial</span>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {children}
        </main>
      </div>
    </div>
  );
};
