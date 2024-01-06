/**
 * console.log but only during development.
 * Uses the NODE_ENV environment variable to check if the app is in development.
 */
export function log(...params: unknown[]) {
  if (import.meta.env.DEV) {
    console.log("[DEV]", ...params);
  }
}

// DOM Manipulation

/**
 * Scrolls to the element with the given id.
 * @param id The id of the element to scroll to.
 * @param behavior The scroll behavior. Defaults to "smooth".
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView}
 * @return The element that was scrolled to if it exists.
 */
export function scrollIntoViewById(
  id: string,
  behavior: ScrollBehavior = "smooth"
) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior });
  }

  return element;
}

/**
 * Detects the browser and adds corresponding classes to the html element. Currently only detects IE, Edge, Firefox, Chrome, and Safari.
 * @return The detected browser. Null if no browser was detected.
 */
export function detectBrowser(): string | null {
  let browser: string | null = null;

  const addClass = document.documentElement.classList.add.bind(
    document.documentElement.classList
  );

  const handleBrowser = (name: string) => {
    browser = name;
    addClass(name);
  };

  // detect IE
  if (navigator.userAgent.indexOf("MSIE") !== -1) {
    handleBrowser("ie");
    return browser;
  }

  // detect Edge
  if (/Edge\/\d./i.test(navigator.userAgent)) {
    handleBrowser("edge");
    return browser;
  }

  if (navigator.userAgent.indexOf("Firefox") !== -1) {
    handleBrowser("firefox");
    return browser;
  }

  if (navigator.userAgent.indexOf("Chrome") !== -1) {
    handleBrowser("chrome");
    return browser;
  }

  if (navigator.userAgent.indexOf("Safari") !== -1) {
    handleBrowser("safari");
    return browser;
  }

  return browser;
}

/**
 * Detects the OS and adds corresponding classes to the html element. Currently only detects iOS, Android, Mac, and Windows.
 * @return The detected OS. Null if no OS was detected.
 */
export function detectOs(): string | null {
  let os: string | null = null;

  const addClass = document.documentElement.classList.add.bind(
    document.documentElement.classList
  );

  const handleOs = (name: string) => {
    os = name;
    addClass(name);
  };

  // detect mobile platform
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    handleOs("ios");
    return os;
  }

  if (navigator.userAgent.match(/Android/i)) {
    handleOs("android");
    return os;
  }

  // detect desktop platform
  if (navigator.userAgent.match(/Mac/i)) {
    handleOs("mac");
    return os;
  }

  if (navigator.userAgent.match(/Windows/i)) {
    handleOs("windows");
    return os;
  }

  return os;
}

// Type Guards

/**
 * Type Guard that checks if the value is an array.
 * @param value The value to check.
 */
export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

/**
 * Type Guard that checks if the value is an object.
 * @param value The value to check.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === "[object Object]";
}

// Theme Helpers

/**
 * [Internal]
 * Sets the theme to the provided theme.
 */
function setTheme(theme: string) {
  if (!theme) {
    console.warn("setTheme: no theme provided");
    return;
  }

  const element = document.documentElement;

  // Remove all existing themes.
  element.classList.remove("light", "dark");

  // Otherwise, add the provided theme.
  element.classList.add(theme);

  // Save the theme to local storage.
  localStorage.setItem("theme", theme);
}

/**
 * Sets the theme to the provided theme.
 * @param theme The theme to set. If "system", the theme will be set to the system preference.
 * @param themes The list of available themes. Defaults to ["light", "dark"].
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme}
 */
export function switchTheme(
  theme = "system",
  themes: string[] = ["light", "dark"]
) {
  if (!theme) {
    console.warn("setTheme: no theme provided");
    return;
  }

  function handleTheme(event: MediaQueryListEvent) {
    if (event.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const element = document.documentElement;
  const query = window.matchMedia("(prefers-color-scheme: dark)");

  // Remove all existing themes.
  themes.forEach((theme) => element.classList.remove(theme));

  // Remove all existing event listeners.
  query.removeEventListener("change", handleTheme);

  // System would mean the theme is set to observe the system preference.
  if (theme === "system") {
    query.matches ? setTheme("dark") : setTheme("light");

    // Add the event listener to observe the system preference.
    query.addEventListener("change", handleTheme);
    return;
  }

  // Otherwise, set the provided theme.
  setTheme(theme);
}

/**
 * Gets the theme from local storage.
 * @return The theme from local storage. Null if no theme is set.
 */
export function getTheme() {
  return localStorage.getItem("theme");
}

// Async Helpers

/**
 * Debounces a function.
 * @param callback The function to debounce.
 * @param wait The time to wait in milliseconds. Defaults to 500.
 * @see {@link https://davidwalsh.name/javascript-debounce-function}
 * @return The debounced function.
 *
 * @example
 * const debounced = debounce(() => console.log("Hello World!"));
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  callback: T,
  wait = 500
) {
  let timeout: NodeJS.Timeout;

  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(args), wait);
  };
}

// Unit Helpers

/**
 * Convert milliseconds to seconds.
 * @param {number} duration The duration in milliseconds.
 * @returns {number} The duration in seconds.
 */
export function msToSeconds(duration: number): number {
  return duration / 1000;
}
