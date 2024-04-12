import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NoteEdit from './components/NoteEdit';
import NoteSearch from './components/NoteSearch';
import NoteTags from './components/NoteTags';
import NoteArchive from './components/NoteArchive'; // Import NoteArchive component

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const searchNotes = (query) => {
    setSearchQuery(query);
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  const filterNotesByTag = (tag) => {
    setSelectedTag(tag);
    const filtered = notes.filter((note) => note.tags.includes(tag));
    setFilteredNotes(filtered);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NoteSearch onSearch={searchNotes} />
              <NoteTags
                tags={['Work', 'Personal', 'Ideas']} // Example tags, replace with your own
                onSelectTag={filterNotesByTag}
              />
              <NoteList
                notes={
                  searchQuery
                    ? filteredNotes
                    : selectedTag
                    ? filteredNotes
                    : notes
                }
                onDelete={deleteNote}
              />
            </div>
          }
        />
        <Route path="/add" element={<NoteForm onSave={addNote} />} />
        <Route
          path="/archive"
          element={<NoteArchive notes={notes} onArchive={editNote} />}
        />
        <Route
          path="/edit/:id"
          element={<NoteEdit notes={notes} onSave={editNote} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
