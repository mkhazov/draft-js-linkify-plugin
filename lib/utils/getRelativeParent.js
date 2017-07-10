'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRelativeParent;
function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');
  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
}