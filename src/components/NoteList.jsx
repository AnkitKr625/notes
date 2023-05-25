function NoteList({ notes }) {
  return (
    <>
      {notes.map((note) => {
        return <div key={note.id}>{note}</div>;
      })}
    </>
  );
}

export default NoteList;
