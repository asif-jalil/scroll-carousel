<p align="center">
  <img style="width:100%;" src="https://media.giphy.com/media/aOMbzVumN3KsEHnb0h/giphy.gif" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/scroll-carousel">
    <img alt="top language" src="https://img.shields.io/github/languages/top/asif-jalil/scroll-carousel" />
  </a>
  <a href="https://www.npmjs.com/package/scroll-carousel">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/scroll-carousel">
  </a>
  <a href="https://www.npmjs.com/package/scroll-carousel">
    <img alt="npm" src="https://img.shields.io/npm/dw/scroll-carousel">
  </a>
  <a href="https://www.jsdelivr.com/package/npm/scroll-carousel">
    <img alt="npm" src="https://data.jsdelivr.com/v1/package/npm/scroll-carousel/badge?style=rounded">
  </a>
  <a href="LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/asif-jalil/scroll-carousel">
  </a>
</p>

# Scroll Carousel

Simple content slider, works on scroll. Absolutely free for use. Thriving for precision & community growth.

[NPM](https://www.npmjs.com/package/scroll-carousel) | [Documentation](https://asif-jalil.github.io/scroll-carousel-website) | [Demos](https://asif-jalil.github.io/scroll-carousel-website/#demos)

**Note:** This carousel only operates in browser.

## Contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [License](#license)
- [Contributors](#contributors)

## Features

- **Mobile friendly:** It is meant to be utilized in mobile web apps and mobile websites.
- **Autoplay:** Scroll carousel supports autoplay.
- **Library Agnostic:** It is significantly smaller and faster because it doesn't need any JavaScript libraries like jQuery.
- **Responsive:** It is responsive by default.
- **Typescript support:** Scroll carousel is fully typed.

## Install

### Download

- CSS

  - [scroll.carousel.min.css](https://cdn.jsdelivr.net/npm/scroll-carousel@1.2.7/dist/scroll.carousel.min.css)

- JS
  - [scroll.carousel.min.js](https://cdn.jsdelivr.net/npm/scroll-carousel@1.2.7/dist/scroll.carousel.min.js)

### CDN

To get started with **Scroll Carousel** right away, there are a few CDN available to serve the file faster:

- [jsDelivr](https://www.jsdelivr.com/package/npm/scroll-carousel)

##### Example usign jsDelivr

Add a link to the css file in your `<head>`:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/scroll-carousel@1.2.7/dist/scroll.carousel.min.css">
```

Then, before your closing `<body>` tag, add:

```
<script src="https://cdn.jsdelivr.net/npm/scroll-carousel@1.2.7/dist/scroll.carousel.min.js"></script>
```

### Package managers

##### npm

```
npm install scroll-carousel
```

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

| Option        | Type      | Default | Description                                                                                                                |
| ------------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| speed         | `number`  | 7       | The value given is how fast you want to move on the scroll. It needs to be greater than 0.                                 |
| smartSpeed    | `boolean` | false   | To calculate the speed of how fast or slow you are scrolling a website.                                                    |
| margin        | `number`  | 10      | To make gap between two slide                                                                                              |
| slideSelector | `string`  | null    | Select the slides with a class name you want to select for the carousel. Other elements will behave as simple.             |
| autoplay      | `boolean` | false   | The option will allow the slides move automatically and still you will have the ability to handle sliding speed on scroll. |
| autoplaySpeed | `number`  | 5       | Control autoplay speed. It needs to be greater than 0                                                                      |
| direction     | `string`  | 'rtl'   | Control direction left to right or right to left. Two possible option - `ltr` or `rtl`                                     |

##### Example with options

```
new ScrollCarousel(".my-carousel", {
  speed: 15,
  autoplay: true,
  autoplaySpeed: 5,
  smartSpeed: true,
  slideSelector: ".my-slide",
  direction: "rtl",
  margin: 10
})
```

or,

```
<div class="my-carousel" data-carousel='{"speed": 15, "autoplay": true, "smartSpeed": true, "slideSelector": ".my-slide"}'>
  <div class="my-slide">...</div>
  <div class="my-slide">...</div>
  <div class="my-slide">...</div>
  ...
</div>
```

> :warning: Options set in HTML must be valid JSON. Keys need to be quoted, for example "speed":. Note that the attribute value uses single quotes ', but the JSON entities use double-quotes ".

### Methods

| Method    | Return           | Description                                                                                                          |
| --------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| destroy() | void             | Remove ScrollCarousel functionality completely. `destroy` will return the element back to its pre-initialized state. |
| reinit()  | ScrollCarousel{} | This will initialize your carousel after destroy with previous options and returned the `ScrollCarousel` instance.   |

##### Example of methods

```
let scrollCarousel = new ScrollCarousel(".my-carousel", {
  speed: 15,
  autoplay: true,
  smartSpeed: true,
  slideSelector: ".my-slide"
})

document.querySelector('#button').addEventListener('click', function () {
  if(scrollCarousel.isActive) {
    scrollCarousel.destroy();
  } else {
    scrollCarousel = scrollCarousel.reinit()
  }
});
```

### Events

| Event   | Description                                               |
| ------- | --------------------------------------------------------- |
| ready   | This event will fire when the plugin is ready to action   |
| destroy | This event will fire when the destroy method is being hit |
| move    | This event will fire when the carousel is on move         |

##### Example of events

```
let scrollCarousel = new ScrollCarousel(".my-carousel", {
  speed: 15,
  autoplay: true,
  smartSpeed: true,
  slideSelector: ".my-slide",
  on: {
    ready: function () {
      console.log("Be ready");
    },
    destroy: function () {
      console.log("Destroyed");
    }
  }
})

scrollCarousel.on("move", function (progress) {
  consol.log(progress);
})
```

## Browser support

**Desktop:** Firefox 8+ ✓ Chrome 15+ ✓ (Should works on Chrome 4-14 as well, but I couldn't test it.) Safari 4+ ✓ Opera 12.1+ ✓ IE 8+ ✓

**Mobile:** Android Browser 4.2+ ✓ Chrome Mobile 63+ ✓ Firefox Mobile 28+ ✓ Maxthon 4+ ✓

## License

The code and the documentation are released under the [MIT License](LICENSE).

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CODE_CONTRIBUTORS.md)].

<a href="CODE_CONTRIBUTORS.md">
<img src="https://contrib.rocks/image?repo=asif-jalil/scroll-carousel"/>
</a>

