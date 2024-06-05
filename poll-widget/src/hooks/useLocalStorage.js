import { useState, useEffect } from "react";
/**
 * useLocalStorage
 * A custom hook for handling local storage.
 * @param {string} key - key for data storing.
 * @param {any} defaultValue - value for data storing.
 * @returns {array} - The value and setter fn for that value.
 */
const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || defaultValue);
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
