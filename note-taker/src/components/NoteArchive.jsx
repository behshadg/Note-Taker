import React from 'react';

const NoteArchive = ({ notes, onArchive }) => {
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div>
      <h2>Archived Notes</h2>
      {archivedNotes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onArchive(note.id)}>Unarchive</button>
        </div>
      ))}
    </div>
  );
};

export default NoteArchive;
