import {
  RichUtils,
  EditorState,
} from 'draft-js';

export default (editorState, url) => {
  const contentStateWithEntity = editorState.getCurrentContent().createEntity('LINK', 'MUTABLE', { url });
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  const newEditorState = RichUtils.toggleLink(
    editorState,
    editorState.getSelection(),
    entityKey,
  );
  return EditorState.forceSelection(
    newEditorState,
    editorState.getCurrentContent().getSelectionAfter()
  );
};
