// NoteList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onDelete(note.id)}>Delete</button>
          <button onClick={() => onArchive(note.id)}>Archive</button>
        </div>
      ))}
      <Link to="/add">Add Note</Link> {/* Link to the note creation page */}
    </div>
  );
};

export default NoteList;
