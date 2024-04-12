// NoteForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NoteForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Math.random().toString(36).substr(2, 9), // Generate unique ID
      title,
      content,
    };
    onSave(newNote);
    setTitle('');
    setContent('');
    navigate('/'); // Redirect to note list after saving
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to home page
  };

  return (
    <div>
      <h2>Add Note</h2>
      <button onClick={handleBack}>Back</button> {/* Back button */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '18px' }}
        />
        <br />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: '100%',
            height: '200px',
            padding: '10px',
            fontSize: '18px',
          }}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NoteForm;
