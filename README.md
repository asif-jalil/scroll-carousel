# Scroll Carousel

Simple content slider, works on scroll. Absolutely free for use. Thriving for precision & community growth.

[Documentation](https://github.com/asif-jalil/scroll-carousel/tree/main/example) | [Demos](https://github.com/asif-jalil/scroll-carousel/tree/main/example)

**Note:** This carousel only operates in browser.

## Contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [License](#license)

## Features

- **Mobile friendly:** It is meant to be utilized in mobile web apps and mobile websites.
- **Loop:** Scroll carousel is looped by default.
- **Library Agnostic:** It is significantly smaller and faster because it doesn't need any JavaScript libraries like jQuery.
- **Responsive:** It is responsive by default.
- **Typescript support:** Scroll carousel is fully typed.

## Install

### Download

- CSS

  - [scroll.carousel.min.css](https://github.com/asif-jalil/scroll-carousel/blob/main/dist/scroll.carousel.min.css) minified, or
  - [scroll.carousel.css](https://github.com/asif-jalil/scroll-carousel/blob/main/dist/scroll.carousel.css) un-minified

- JS
  - [scroll.carousel.min.js](https://github.com/asif-jalil/scroll-carousel/blob/main/dist/scroll.carousel.min.js) minified, or
  - [scroll.carousel.js](https://github.com/asif-jalil/scroll-carousel/blob/main/dist/scroll.carousel.js) un-minified

### CDN

To get started with **Scroll Carousel** right away, there are a few CDN available to serve the file faster:

- https://www.jsdelivr.com/

##### Example usign jsDelivr

Add a link to the css file in your `<head>`:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/asif-jalil/scroll-carousel/dist/scroll.carousel.min.css">
```

Then, before your closing `<body>` tag, add:

```
<script src="https://cdn.jsdelivr.net/gh/asif-jalil/scroll-carousel/dist/scroll.carousel.min.js"></script>
```

### Package managers

npm - `npm install scroll-carousel`

Using with npm needs import js and css. Let's see -

Import JS in your js file

```
import ScrollCarousel from 'scroll-carousel';
```

Import CSS in your css file

```
@import 'node_modules/scroll-carousel/dist/scroll.carousel.css';
```

## Usage

Scroll Carousel basically works with a container element and a set of child item elements. Wrap your item elements (`div`, `a`, `span`, `li` etc) with a container element (`div`, `ul` etc).

```
<div class="my-carousel">
  <div class="my-slide">...</div>
  <div class="my-slide">...</div>
  <div class="my-slide">...</div>
  ...
</div>
```

**NOTE:** `my-carousel` class name is not mandatory. You can use any class or id name according to your choice and need.

#### Initialize with vanilla Javascript

Initialize the Scroll Carousel with `new` keyword.

```
new ScrollCarousel(".my-carousel", {
  ...options
})
```

or,

```
const myCarousel = document.querySelector(".my-carousel");

new ScrollCarousel(myCarousel, {
  ...options
})
```

#### Initialize with HTML

You can initialize **Scroll Carousel** in HTML, without writing any JavaScript. Add `data-carousel` attribute to the carousel element. Options can be set in its value.

```
<div class="my-carousel" data-carousel>
  <div class="my-slide">...</div>
  <div class="my-slide">...</div>
  <div class="my-slide">...</div>
  ...
</div>
```

### Options

| Option     | Type    | Default | Description                                                                                     |
| ---------- | ------- | ------- | ----------------------------------------------------------------------------------------------- |
| speed      | number  | 7       | The value given is actually how fast you want to move on scroll. It needs to be greater than 0. |
| smartSpeed | boolean | false   | To calculate the speed more smartly on displacement and time difference.                        |

##### Example for speed

```
new ScrollCarousel(".my-carousel", {
  speed: 15
})
```

or,

```
<div class="my-carousel" data-carousel='{"speed": 15}'>
  <div class="my-slide">...</div>
  <div class="my-slide">...</div>
  <div class="my-slide">...</div>
  ...
</div>
```

> :warning: Options set in HTML must be valid JSON. Keys need to be quoted, for example "speed":. Note that the attribute value uses single quotes ', but the JSON entities use double-quotes ".

## Browser support

**Desktop:** Firefox 8+ ✓ Chrome 15+ ✓ (Should works on Chrome 4-14 as well, but I couldn't test it.) Safari 4+ ✓ Opera 12.1+ ✓ IE 8+ ✓

**Mobile:** Android Browser 4.2+ ✓ Chrome Mobile 63+ ✓ Firefox Mobile 28+ ✓ Maxthon 4+ ✓

## License

The code and the documentation are released under the [MIT License](LICENSE).

