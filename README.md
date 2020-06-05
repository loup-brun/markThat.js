# markThat.js

A mini script to `markThat(text)`.

## WTF

Every dreamt of using the `==` fences to `<mark` your text in markdown, but your rendering engine wouldn’t support it?
This little guy’s got you covered.

## Install

Load the script on the page.
Supports both AMD and the browser.

```html
<script src="/path/to/markThat.js"></script>
```

## Usage

### Method 1: Play with strings

```js
var text = 'Some HTML text that I want to ==mark==.';
var article = document.querySelector('article');
var markedText = markThat(text); // returns 'Some HTML text that I want to <mark>mark</mark>.'

// Modify the DOM yourself
article.innerHTML = markedText;
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