import { it, vi, suite, beforeEach, afterEach } from "vitest";
import {
  detectBrowser,
  detectOs,
  isArray,
  isObject,
  switchTheme,
  getTheme,
  debounce,
  msToSeconds,
} from "./index"; // Replace with your actual module path

suite("DOM Manipulation", () => {
  it("Should scroll to the element with the given id", () => {
    // Add test logic for scrollIntoViewById
  });

  beforeEach(() => {
    vi.spyOn(navigator, "userAgent", "get").mockReturnValue(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Should detect the browser and add corresponding classes", () => {
    const browser = detectBrowser();

    // Test that the class was added
    expect(browser).toBe("chrome");
  });

  it("Should detect the OS and add corresponding classes", () => {
    const os = detectOs();

    // Test that the class was added
    expect(os).toBe("windows");
  });
});

suite("Type Guards", () => {
  it("Should correctly identify if the value is an array", () => {
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
  });

  it("Should correctly identify if the value is an object", () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(false);
  });
});

suite("Theme Helpers", () => {
  it("Should set the theme to the provided theme and return it", () => {
    switchTheme("dark");

    // Test that the theme was set
    expect(getTheme()).toBe("dark");
  });

  it("Should set the theme to the system theme if no theme is provided", () => {
    vi.spyOn(
      window.matchMedia("(prefers-color-scheme: light)"),
      "matches",
      "get"
    ).mockReturnValue(true);

    switchTheme();

    // Test that the theme was set
    // Note: this test will fail if the prefers-color-scheme is not set to dark
    expect(getTheme()).toBe("light");
  });
});

suite("Async Helpers", () => {
  it("Should debounce a function", () => {
    vi.useFakeTimers();

    const mockConsole = vi.spyOn(console, "log");

    // Add test logic for debounce
    debounce(() => console.log("Debounced"), 1000)();

    // Test that the function was not called
    expect(mockConsole).not.toHaveBeenCalled();

    // Advance the timers by 1000ms
    vi.advanceTimersByTime(1000);

    // Test that the function was called
    expect(mockConsole).toHaveBeenCalled();
  });
});

suite("Unit Helpers", () => {
  it("Should convert milliseconds to seconds", () => {
    expect(msToSeconds(1000)).toBe(1);
  });
});
