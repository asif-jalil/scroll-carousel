declare class ScrollCarousel {
  constructor(element: Element | NodeList | string, options?: ScrollCarousel.Options);
}

declare namespace ScrollCarousel {
  interface Options {
    speed: number;
    smartSpeed: boolean;
  }
}

export = ScrollCarousel;

export as namespace ScrollCarousel;

