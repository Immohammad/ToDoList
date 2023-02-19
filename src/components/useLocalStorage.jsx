import React, { useEffect, useState } from "react";

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    typeof window === "undefined" ?  fallbackState: JSON.parse(localStorage.getItem(storageKey))
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
export default useLocalStorage;
