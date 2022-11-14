import highlightjsInit from './highlight';
import clipboardInit from './clipboard';
import tooltipInit from './tooltip';

// Get Document ready
const docReady = fn => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};

docReady(highlightjsInit);
docReady(tooltipInit);
docReady(clipboardInit);
