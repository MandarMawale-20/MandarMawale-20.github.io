import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string; // Optional optimized WebP source
  className?: string;
  imgClassName?: string; // Applied to the <img> itself (e.g. hover transforms)
  priority?: boolean; // If true, eager load (LCP candidates)
}

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  webpSrc, 
  className = '', 
  imgClassName = '',
  priority = false,
  ...props 
}) => {
  // Eager images are visible right away: better for LCP and for the prerendered HTML
  const [isLoaded, setIsLoaded] = useState(priority);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder / Blur effect while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[var(--surface-2)] animate-pulse" />
      )}
      
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-700 w-full h-full object-cover ${imgClassName} ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      </picture>
    </div>
  );
};
