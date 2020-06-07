/*!
 * @name markThat.js
 * @description Use == to <mark> text.
 * @author Louis-Olivier Brassard <louis@loupbrun.ca> "https://loupbrun.ca"
 * @repository https://github.com/loup-brun/markThat.js
 * @license WTFPL
 */

// Uses AMD or browser globals to create a module.
// @see https://github.com/umdjs/umd/

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['markThat'], factory);
  } else {
    // Browser globals
    root.markThat = factory(root.markThat);
  }
}(typeof self !== 'undefined' ? self : this, function (markThat) {
  // Use markThat() in some fashion.
  /**
   * 
   * @throws  {Error}  Throws an error if the argument was neither a DOM element nor a string.
   * @param   {string} text Text to render or DOM node to update
   * @returns {string} Text with == transformed to <mark>.
   */
  return function markThat(text) {
    // Check whether the user passed a node or a string
    if ((typeof text ===  'object') &&
        (text.nodeType === 1) &&
        (typeof text.style === 'object') &&
        (typeof text.ownerDocument ==='object')) {
      // HTML node
      // Re-run the function, passing the element’s innerHTML as argument
      return text.innerHTML = markThat(text.innerHTML);
    } else if (typeof text === 'string') {
      // String
      return text.replace(/==([^=]+)==/g, '<mark>$1</mark>');
    } else {
      // ??? Unknown, throw an error
      throw new Error('You passed an argument that markThat.js does not recognize. Please consider providing a string or an HTML element.');
    }
  };
}));
