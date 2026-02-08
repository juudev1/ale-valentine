import React from 'react';

export const Article = ({ title, subtitle, content, image, imageCaption, className = "" }) => {
  return (
    <article className={`border-b md:border-b-0 border-gray-300 pb-6 md:pb-0 ${className}`}>
      {image && (
        <figure className="mb-4 grayscale hover:grayscale-0 transition-all duration-500">
          <img src={image} alt={title} className="w-full h-auto object-cover border border-gray-200" />
          {imageCaption && <figcaption className="text-xs text-gray-500 mt-1 italic text-center">{imageCaption}</figcaption>}
        </figure>
      )}
      <div className="prose prose-stone max-w-none">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight font-display">{title}</h2>
        {subtitle && <h3 className="text-lg text-gray-600 mb-3 italic font-serif">{subtitle}</h3>}
        <div className="text-justify text-sm md:text-base leading-relaxed font-serif first-letter:float-left first-letter:text-5xl first-letter:pr-2 first-letter:font-bold first-letter:mt-[-4px]">
          {content}
        </div>
      </div>
    </article>
  );
};
