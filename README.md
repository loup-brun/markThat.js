# markThat.js

A mini script to `markThat(==text==)`.

## What’s this?

So you want to use the `==` fences for using the [HTML `<mark>` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element) in Markdown, but your rendering engine wouldn’t support it?
This little guy’s got you covered.

## Install

Load the script on the page.
Supports both AMD and the browser.

```html
<script src="/path/to/markThat.js"></script>
```

## Usage

### Method 1: String

```js
var text = 'Some HTML text that I want to ==mark==.';
var article = document.querySelector('article');

// Update the DOM yourself
article.innerHTML = markThat(text); // 'Some HTML text that I want to <mark>mark</mark>.'
```

### Method 2: DOM element

Alternatively, just specify a DOM element and let `markThat` do the trick:

```js
var article = document.querySelector('article');

markThat(article); // <article> has been updated
```

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)

Use at your own risk.
