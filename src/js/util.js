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

export function duplicateElems(elems) {
  return elems.map(node => node.cloneNode(true));
}

export function validation(options) {
  if (Number(options.speed) <= 0) options.speed = 1;

  return options;
}

