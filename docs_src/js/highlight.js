import hljs from 'highlight.js';

const highlightjsInit = () => {
  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
  });
}

export default highlightjsInit;