import { useCallback, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue) {
      return JSON.parse(savedValue);
    }

    return initialValue;
  });

  const saveValue = useCallback((newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }, [key]);

  return [value, saveValue];
}

export default useLocalStorage;
