import { useState, useEffect, useRef } from 'react';

/**
 * Optimized Image component with lazy loading and IntersectionObserver
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - CSS classes
 * @param {string} loading - Loading strategy ('lazy' | 'eager')
 * @param {string} fetchPriority - Fetch priority ('high' | 'low' | 'auto')
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fetchPriority = 'auto',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Only use IntersectionObserver for lazy loaded images
    if (loading === 'lazy') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '50px', // Start loading 50px before viewport
        }
      );

      observer.observe(imgRef.current);

      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [loading]);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isInView && (
        <>
          {/* Blur placeholder while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-inherit" />
          )}
          
          <img
            src={src}
            alt={alt}
            loading={loading}
            fetchPriority={fetchPriority}
            onLoad={() => setIsLoaded(true)}
            className={`${className} transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            {...props}
          />
        </>
      )}
    </div>
  );
};
