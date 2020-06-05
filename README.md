# markThat.js

A mini script to `markThat(text)`.

## Install

Load the script on the page.
Supports AMD and the browser.

```html
<script src="/path/to/markThat.js"></script>
```

## Usage

### Method 1: Play with strings

```js
var text = 'Some HTML text that I want to ==mark==.';
var article = document.querySelector('article');
markThat(text); // returns 'Some HTML text that I want to <mark>mark</mark>.'

// Modify the DOM yourself
article.innerHTML = text;
```

### Method 2: DOM element

Alternatively, just specify an HTML node  and let `markThat` do its work:

```js
var article = document.querySelector('article');

markThat(article); // <article> has been updated
```

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)

Use at your own risk.