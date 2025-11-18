import { useState, useEffect } from 'react';
import { throttle } from '../utils/performance';

/**
 * Custom hook for optimized intersection observer
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} - { ref, isVisible }
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: disconnect after first intersection
          if (options.once) {
            observer.disconnect();
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, options.once, options.threshold, options.rootMargin]);

  return { ref: setElement, isVisible };
};

/**
 * Custom hook for throttled scroll position
 * @param {number} throttleMs - Throttle delay in milliseconds
 * @returns {Object} - { scrollY, scrollX, scrollDirection }
 */
export const useThrottledScroll = (throttleMs = 100) => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: 'down',
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = throttle(() => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      setScrollPosition({
        scrollY: currentScrollY,
        scrollX: window.pageXOffset,
        scrollDirection: direction,
      });

      lastScrollY = currentScrollY;
    }, throttleMs);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttleMs]);

  return scrollPosition;
};

/**
 * Custom hook for optimized mouse position tracking
 * @param {number} throttleMs - Throttle delay in milliseconds
 * @returns {Object} - { x, y }
 */
export const useThrottledMousePosition = (throttleMs = 50) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, throttleMs);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [throttleMs]);

  return mousePosition;
};

/**
 * Custom hook for media query
 * @param {string} query - Media query string
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (e) => setMatches(e.matches);
    
    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
};

/**
 * Custom hook for reduced motion preference
 * @returns {boolean} - True if user prefers reduced motion
 */
export const usePrefersReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

/**
 * Custom hook for debounced value
 * @param {any} value - Value to debounce
 * @param {number} delay - Debounce delay in milliseconds
 * @returns {any} - Debounced value
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Custom hook for lazy loading images
 * @returns {Object} - { imgRef, isLoaded, isInView }
 */
export const useLazyImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imgElement, setImgElement] = useState(null);

  useEffect(() => {
    if (!imgElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgElement);

    return () => observer.disconnect();
  }, [imgElement]);

  const handleLoad = () => setIsLoaded(true);

  return {
    imgRef: setImgElement,
    isLoaded,
    isInView,
    handleLoad,
  };
};
