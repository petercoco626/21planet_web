import { useCallback, useRef } from 'react';

export function useDebounce<T extends unknown>(
  callback: (...args: T[]) => void,
  delay: number
) {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: T[]) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        callback(...args);
      };

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(later, delay);
    },
    [callback, delay]
  );
}
