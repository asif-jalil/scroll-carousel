declare class ScrollCarousel {
  constructor(element: Element | Node | string, options?: ScrollCarousel.Options);
}

declare namespace ScrollCarousel {
  interface Options {
    speed: number;
  }
}

export = ScrollCarousel;

export as namespace ScrollCarousel;
