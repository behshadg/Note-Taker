// NoteList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="note-list-container">
      <div className="note-list-header">
        <h2>Notes</h2>
        <Link to="/add" className="btn btn-primary">
          Add Note
        </Link>
      </div>
      <div className="note-list">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
