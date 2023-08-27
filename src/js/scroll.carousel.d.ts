type ScrollCarouselEvent = 'ready' | 'scroll' | 'destroy';

interface EventBindings {
  /**
   * Triggered after ScrollCarousel has been activated.
   */
  ready?: () => void;
  /**
   * Triggered when the slider moves.
   */
  move?: (progress: number) => void;
  /**
   * Triggered when the carousel destroyed
   */
  destroy?: () => void;
}

declare class ScrollCarousel {
  constructor(element: Element | NodeList | string, options?: ScrollCarousel.Options);

  /**
   * Clears all bindings.
   */
  destroy(): void;
  /**
   * Subscribes to events that indicate the result of a copy/cut operation.
   * @param eventname Event name ('ready' or 'scroll' or 'destroy').
   * @param listener Callback function.
   */
  on(eventname: ScrollCarouselEvent, listener: (...args: any[]) => void): this;
  /**
   * Re initialize the carousel after destroy
   */
  reinit(): this;
  /**
   * The carousel is active or not
   */
  isActive: boolean;
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
     * Speed control for autoplay
     */
    autoplaySpeed?: number;
    /**
     * select slide with class name which you want to select for carousel.
     *  other element will behave as simple
     */
    slideSelector?: string;
    /**
     * Bind events within options by setting on to an Object. The object's keys should match the event names.
     * on is useful for capturing events as ScrollCarousel is initialized, like ready
     */
    on?: EventBindings;
    /**
     * moving direction of the slides
     */
    direction?: 'rtl' | 'ltr';
  }
}

export default ScrollCarousel;

export { ScrollCarousel };

export as namespace ScrollCarousel;

