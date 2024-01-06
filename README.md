# Trunk

[![npm version](https://badge.fury.io/js/%40sassywares%2Ftrunk.svg)](https://badge.fury.io/js/%40sassywares%2Ftrunk) ![Builds](https://github.com/sassywares/trunk/actions/workflows/release.yml/badge.svg)

Trunk is a set of utilities for JavaScript applications. Read more below.

## Functions

- [log](#log)
- [scrollIntoViewById](#scrollintoviewbyid)
- [detectBrowser](#detectbrowser)
- [detectOs](#detectos)
- [isArray](#isarray)
- [isObject](#isobject)
- [switchTheme](#switchtheme)
- [getTheme](#gettheme)
- [debounce](#debounce)
- [msToSeconds](#mstoseconds)

### log

```js
import { log } from '@sassywares/trunk';

// Only logs when NODE_ENV is set to development
log('Hello World');
```

### scrollIntoViewById

```js
import { scrollIntoViewById } from '@sassywares/trunk';

// Scrolls to the element with the id of 'my-id'
scrollIntoViewById('my-id');

// Can pass behavior as the second argument
scrollIntoViewById('my-id', 'smooth');
```

### detectBrowser

```js
import { detectBrowser } from '@sassywares/trunk';

// Returns the detected browser as well as sets it as a class on the html element
detectBrowser();
```

### detectOs

```js
import { detectOs } from '@sassywares/trunk';

// Returns the detected OS as well as sets it as a class on the html element
detectOs();
```

### isArray

```js
import { isArray } from '@sassywares/trunk';

// Returns true
isArray([]);

// Returns false
isArray({});
```

### isObject

```js
import { isObject } from '@sassywares/trunk';

// Returns true
isObject({});

// Returns false
isObject([]);
```

### switchTheme

```js
import { switchTheme } from '@sassywares/trunk';

// Switches the theme to dark
switchTheme('dark');

// Switches the theme to light
switchTheme('light');

// Switches the theme to user's preferred theme and observes for changes
switchTheme('system');
```

### getTheme

```js
import { getTheme } from '@sassywares/trunk';

// Returns the current theme or null if no theme is set
getTheme();
```

### debounce

```js
import { debounce } from '@sassywares/trunk';

// Debounces the function by 500ms
const debouncedLog = debounce((obj) => console.log(obj), 500);
```

### msToSeconds

```js
import { msToSeconds } from '@sassywares/trunk';

// Returns 1
msToSeconds(1000);

// Returns 2
msToSeconds(2000);
```

## Getting Started

To get started with Trunk, install it using NPM, Yarn, or PNPM:

```bash
npm install @sassywares/trunk
```

```bash
yarn add @sassywares/trunk
```

```bash
pnpm add @sassywares/trunk
```

Then, import the functions you need:

```js
import { isObject, detectBrowser } from '@sassywares/trunk';
```

## Contributing

Trunk comes from the community for the community. We are always looking for ways to improve Trunk and make it better. If you have any suggestions, ideas, or feedback, please open an issue or a pull request.

## License

Trunk is open source software released under the [MIT License](LICENSE). We encourage you to use, modify, and distribute Trunk as you see fit.
