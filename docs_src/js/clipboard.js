import Clipboard from 'clipboard';

const clipboardInit = () => new Clipboard('[data-clipboard-text]');

export default clipboardInit;
