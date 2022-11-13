import Clipboard from "clipboard";

const clipboardInit = () => {
  
const clipboardDemos = new Clipboard('[data-clipboard-demo]');

  clipboardDemos.on('success', function(e) {
      e.clearSelection();

      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);

      showTooltip(e.trigger, 'Copied!');
  });
  
function showTooltip(elem, msg) {
  elem.setAttribute('class', 'btn tooltipped tooltipped-s');
  elem.setAttribute('aria-label', msg);
}
}

export default clipboardInit;