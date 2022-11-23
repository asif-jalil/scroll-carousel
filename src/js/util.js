/**
 * check an element, node, array, object is into view or not
 *
 * @param {[Node, Element]} el
 * - single element, selected node, an array or a object
 *
 * @return {Boolean} - Boolean
 */
export function isScrolledIntoView(el) {
  if (!el) {
    return false;
  }
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}

// ----- getQueryElement ----- //

// use element as selector string
export function getQueryElement(elem) {
  if (typeof elem == 'string') {
    return document.querySelector(elem);
  }
  return elem;
}

// ----- filterFindElements ----- //
export function filterFindElements(elems, selector) {
  // make array of elems
  elems = makeArray(elems);

  return (
    elems
      // check that elem is an actual element
      .filter(elem => elem instanceof HTMLElement)
      .reduce((scElems, elem) => {
        // add elem of no selector
        if (!selector) {
          scElems.push(elem);
          return scElems;
        }
        // filter & find items if we have a selector
        // filter
        if (elem.matches(selector)) {
          scElems.push(elem);
        }
        // find children
        let childElems = elem.querySelectorAll(selector);
        // concat childElems to filterFound array
        scElems = scElems.concat(...childElems);
        return scElems;
      }, [])
  );
}

// ----- makeArray ----- //

// turn element or NodeList into an array
export function makeArray(obj) {
  // use object if already an array
  if (Array.isArray(obj)) return obj;

  // return empty array if undefined or null
  if (obj === null || obj === undefined) return [];

  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if (isArrayLike) return [...obj];

  // array of single index
  return [obj];
}

// ----- docReady ----- //

export function docReady(onDocReady) {
  let readyState = document.readyState;
  if (readyState == 'complete' || readyState == 'interactive') {
    // do async to allow for other scripts to run.
    setTimeout(onDocReady);
  } else {
    document.addEventListener('DOMContentLoaded', onDocReady);
  }
}

// ----- htmlInit ----- //

// source: http://bit.ly/3oYLusc
export function toDashed(str) {
  return str
    .replace(/(.)([A-Z])/g, function (match, $1, $2) {
      return $1 + '-' + $2;
    })
    .toLowerCase();
}

// allow user to initialize classes via [data-namespace] or .js-namespace class
// htmlInit( Widget, 'widgetName' )
// options are parsed from data-namespace-options
export function htmlInit(WidgetClass, namespace) {
  docReady(function () {
    let dashedNamespace = toDashed(namespace);
    let dataAttr = 'data-' + dashedNamespace;
    let dataAttrElems = document.querySelectorAll(`[${dataAttr}]`);

    [...dataAttrElems].forEach(elem => {
      let attr = elem.getAttribute(dataAttr);
      let options;
      try {
        options = attr && JSON.parse(attr);
      } catch (error) {
        // log error, do not initialize
        if (console) {
          console.error(`Error parsing ${dataAttr} on ${elem.className}: ${error}`);
        }
        return;
      }
      // initialize
      new WidgetClass(elem, options);
    });
  });
}

/**
 * Duplicate a node
 *
 * @param {Array} elems
 * @return {Array} array of element
 *
 */
export function duplicateElems(elems) {
  return elems.map(node => node.cloneNode(true));
}

// option validation
/**
 *
 * @param {Object} options
 * @returns {Object} Same object of param with sanitization
 */
export function sanitizer(options) {
  if (Object.keys(options).includes('speed') && !Number(options.speed)) options.speed = 7;
  if (Number(options.speed) <= 0) options.speed = 1;
  if (Object.keys(options).includes('margin') && !Number(options.margin) && Number(options.margin) !== 0)
    options.margin = 10;

  return options;
}

