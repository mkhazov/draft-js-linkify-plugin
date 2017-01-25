'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

exports.default = function (editorState) {
  var newEditorState = _draftJs.RichUtils.toggleLink(editorState, editorState.getSelection(), null);
  return _draftJs.EditorState.forceSelection(newEditorState, editorState.getCurrentContent().getSelectionAfter());
};