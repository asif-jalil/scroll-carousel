# Scroll Carousel

A unique content slider that specially works on window scroll. It is free to use.

[Examples](https://github.com/asif-jalil/scroll-carousel/tree/main/example)

**Note:** A scroll carousel specially developed for static content that only operates in browsers.

## Contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Browser Support](#browser-support)

## Features

- **Mobile friendly:** It is meant to be utilized in mobile web apps and mobile websites.
- **Loop:** Scroll carousel is looped by default.
- **Autoplay:** It supports autoplay. But we recommend to use use scroll play.
- **Library Agnostic:** Scroll carousel is significantly smaller and faster because it doesn't need any JavaScript libraries like jQuery.
- **Responsive:** It is responsive by default. You don't need to take hassle for this.

## Install

### Download

- CSS

  - [scroll.carousel.min.css](https://github.com/asif-jalil/scroll-carousel/blob/main/dist/scroll.carousel.min.css) minified, or
  - [scroll.carousel.css](https://github.com/asif-jalil/scroll-carousel/blob/main/dist/scroll.carousel.css) un-minified

- JS
  - [scroll.carousel.min.js](https://github.com/asif-jalil/scroll-carousel/blob/main/dist/scroll.carousel.min.js) minified, or
  - [scroll.carousel.js](https://github.com/asif-jalil/scroll-carousel/blob/main/dist/scroll.carousel.js) un-minified

### CDN

To get started using **Scroll Carousel** right away, there are a few CDN available to serve the file as fast as possible to your users:

- https://cdnjs.com/
- https://www.jsdelivr.com/

##### Example usign jsDelivr

Just add a link to the css file in your `<head>`:

```
<link rel="stylesheet" href="https://unpkg.com/scroll-carousel/dist/scroll.carousel.min.css">
```

Then, before your closing `<body>` tag add:

```
<script src="https://unpkg.com/scroll-carousel/dist/scroll.carousel.min.js"></script>
```

### Package managers

npm - `npm install scroll-carousel`

## Usage

Scroll Carousel works with a container element and a set of child item elements. Wrap your item elements (`div`, `a`, `span`, `li` etc) with a container element (`div`, `ul` etc).

```
<div class="carousel">
  <div class="carousel-cell">...</div>
  <div class="carousel-cell">...</div>
  <div class="carousel-cell">...</div>
  ...
</div>
```

**NOTE:** `carousel` class is not mandatory. You can use any class according to your choice and need.

Initialize the the Scroll Carousel with `new` keyword.

```
new ScrollCarousel(".carousel", {
  ...options
})
```

### Options

| Option | Type   | Default | Description                                                                                                                |
| ------ | ------ | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| speed  | number | 7       | Movement speed when scroll. Value must be greater than 1. The value is actually how many `px` you want to move per scroll. |

##### Example with speed

```
new ScrollCarousel(".carousel", {
  speed: 15
})
```

## Browser support

**Desktop:** Firefox 8+ ✓ Chrome 15+ ✓ (Should works on Chrome 4-14 as well, but I couldn't test it.) Safari 4+ ✓ Opera 12.1+ ✓ IE 8+ ✓

**Mobile:** Android Browser 4.2+ ✓ Chrome Mobile 63+ ✓ Firefox Mobile 28+ ✓ Maxthon 4+ ✓

