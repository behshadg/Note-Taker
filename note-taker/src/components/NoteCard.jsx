// NoteCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import './NoteCard.css';

const NoteCard = ({ note, onDelete, onArchive }) => {
  return (
    <div className="note-card">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>
      <div className="note-actions">
        <Link to={`/edit/${note.id}`} className="btn btn-primary">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={() => onDelete(note.id)}>
          Delete
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => onArchive(note.id)}
        >
          Archive
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
