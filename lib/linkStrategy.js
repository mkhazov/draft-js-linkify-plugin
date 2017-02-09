'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

function linkStrategy(contentBlock, cb, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    if (entityKey === null) {
      return;
    }

    var entity = contentState ? contentState.getEntity(entityKey) : _draftJs.Entity.get(entityKey);
    return entity.getType() === 'LINK';
  }, cb);
}

exports.default = linkStrategy;