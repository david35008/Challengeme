import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedSearchValue;
}
