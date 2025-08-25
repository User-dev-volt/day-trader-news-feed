import { useEffect, useRef } from 'react';

/**
 * @hook usePolling
 * @description A custom hook to execute a callback function at a specified interval.
 * @param {() => void} callback - The function to be called at each interval.
 * @param {number} delay - The interval delay in milliseconds.
 */
export const usePolling = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
