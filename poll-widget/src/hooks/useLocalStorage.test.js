// useLocalStorage.test.js
import { renderHook, act } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

describe("useLocalStorage hook", () => {
  beforeEach(() => {
    localStorage.clear(); // Clear local storage before each test
  });

  test("returns default value when localStorage is empty", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "defaultValue")
    );
    const [value] = result.current;

    expect(value).toBe("defaultValue");
  });

  test("returns stored value from localStorage", () => {
    localStorage.setItem("testKey", JSON.stringify("storedValue"));
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "defaultValue")
    );
    const [value] = result.current;

    expect(value).toBe("storedValue");
  });

  test("updates value in localStorage and returns new value", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "defaultValue")
    );
    let [value, setValue] = result.current;

    act(() => {
      setValue("newValue");
    });

    [value] = result.current; // Update value after setState

    expect(value).toBe("newValue");
    expect(localStorage.getItem("testKey")).toBe(JSON.stringify("newValue"));
  });
});
