'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

exports.default = function (editorState, url) {
  var contentStateWithEntity = editorState.getCurrentContent().createEntity('LINK', 'MUTABLE', { url: url });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  var newEditorState = _draftJs.RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey);
  return _draftJs.EditorState.forceSelection(newEditorState, editorState.getCurrentContent().getSelectionAfter());
};