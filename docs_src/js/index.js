import highlightjsInit from './highlight';
// import optionsInit from './options';
import clipboardInit from './clipboard';

// Get Document ready
const docReady = fn => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};

optionsInit();
docReady(highlightjsInit);
docReady(clipboardInit);

