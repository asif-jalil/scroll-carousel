import Clipboard from 'clipboard';
import highlightjsInit from './highlight';
import tooltipInit from './tooltip';

// Get Document ready
const docReady = fn => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};

const scrollCarouselInit = () => new ScrollCarousel('.basic__example-carousel');
const clipboardInit = () => new Clipboard('[data-clipboard-text]');

docReady(scrollCarouselInit);
docReady(highlightjsInit);
docReady(tooltipInit);
docReady(clipboardInit);
