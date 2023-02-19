import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, fallbackState) => {
  // It is our custom hook for read and write on local storage
  // first argument is key and second is initial value
  const [value, setValue] = useState(
    typeof window === "undefined" ?  fallbackState: JSON.parse(localStorage.getItem(storageKey))
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
export default useLocalStorage;
