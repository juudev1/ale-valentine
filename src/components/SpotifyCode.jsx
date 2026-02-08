import React from 'react';

export const SpotifyCode = () => {
  return (
    <div className="bg-black p-2 rounded-lg flex items-center justify-center gap-2 max-w-[200px] mx-auto grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
       <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
         <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-black rotate-90 ml-1"></div>
       </div>
       <div className="flex items-center gap-[2px] h-6 flex-1">
          {[...Array(25)].map((_, i) => (
             <div 
               key={i} 
               className="bg-white rounded-full w-1"
               style={{ height: `${Math.random() * 80 + 20}%` }}
             ></div>
          ))}
       </div>
    </div>
  );
};
