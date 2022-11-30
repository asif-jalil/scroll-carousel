declare class ScrollCarousel {
  constructor(element: Element | NodeList | string, options?: ScrollCarousel.Options);

  /**
   * Clears all bindings.
   */
  destroy(): void;
  /**
   * Add a slide at the end the slider
   */
  append(): void;
}

declare namespace ScrollCarousel {
  interface Options {
    /**
     * Movement speed of the carousel
     */
    speed?: number;
    /**
     * Handle the speed according to acceleration
     */
    smartSpeed?: boolean;
    /**
     * Margin between two slides
     */
    margin?: number;
    /**
     * Slide will play auto
     */
    autoplay?: boolean;
    /**
     * select slide with class name which you want to select for carousel.
     *  other element will behave as simple
     */
    slideSelector?: string;
  }
}

export = ScrollCarousel;

export as namespace ScrollCarousel;

