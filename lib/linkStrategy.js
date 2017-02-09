'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function linkStrategy(contentBlock, cb, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, cb);
}

exports.default = linkStrategy;