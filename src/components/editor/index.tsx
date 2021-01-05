import * as React from "react";
import { TAB } from "../../constants";
import "./Editor.css";

const TAB_LENGTH = 4;

export const Editor = () => {
  const [value, onSetValue] = React.useState<string>("");

  const onKeyDown = React.useCallback((event) => {
    if (event.keyCode !== TAB) return;

    event.preventDefault();
    const { currentTarget: textarea } = event;
    const { selectionStart: s0, selectionEnd: s1, value } = textarea;
    const newValue = value.substring(0, s0) + "    " + value.substring(s1);
    textarea.setSelectionRange(s0 + TAB_LENGTH, s1 + TAB_LENGTH);
    onSetValue(newValue);
  }, []);

  return (
    <textarea
      className="editor"
      value={value}
      placeholder="Your code"
      onChange={(event) => onSetValue(event.currentTarget.value)}
      onKeyDown={onKeyDown}
    ></textarea>
  );
};

export default Editor;
