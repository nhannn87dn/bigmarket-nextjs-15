"use client"

import { useEffect, useState } from 'react';

/**
 * useClientMediaQuery
 * @param query string | example: '(max-width: 768px)'
 * @returns boolean
 * @usage 
 * import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';
 * const isMobile = useClientMediaQuery('(max-width: 600px)');
 */
export function useClientMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMatchChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQueryList.addEventListener('change', handleMatchChange);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener('change', handleMatchChange);
    };
  }, [query]);

  return matches;
}