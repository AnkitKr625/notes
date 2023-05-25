import React from "react";

function TextArea({ newNote, setNewNote }) {
  return (
    <>
      <header className="text-area-header"></header>
      <textarea
        name="notes"
        placeholder="write something..."
        onChange={(e) => setNewNote(e.target.value)}
        value={newNote}
        rows={20}
        cols={100}
      />
    </>
  );
}

export default TextArea;
