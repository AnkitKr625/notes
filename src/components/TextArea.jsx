import React from "react";
import './TextArea.css';

function TextArea({ newNote, setNewNote }) {
  return (
    <div className="textarea">
      <header className="text-area-header textarea-header">
        <strong>B</strong>
        <i>I</i>
        <span>U</span>
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
