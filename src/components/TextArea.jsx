import React from "react";
import { makeBold, makeItalic, makeUnderline } from "../util/utllity";
import "./TextArea.css";

function TextArea({ newNote, setNewNote }) {
  return (
    <div className="textarea">
      <header className="text-area-header textarea-header">
        <strong className="cursor-pointer" onClick={makeBold}>
          B
        </strong>
        <i className="cursor-pointer" onClick={makeItalic}>
          I
        </i>
        <span className="cursor-pointer" onClick={makeUnderline}>
          U
        </span>
      </header>
      <textarea
        name="notes"
        placeholder="write something..."
        onChange={(e) => setNewNote(e.target.value)}
        value={newNote}
        rows={20}
        cols={100}
      />
    </div>
  );
}

export default TextArea;
