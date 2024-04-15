import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NoteEdit from './components/NoteEdit';
import NoteSearch from './components/NoteSearch';
import NoteTags from './components/NoteTags';
import NoteArchive from './components/NoteArchive';

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

  const updateNote = (updatedNote) => {
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
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <NoteSearch onSearch={searchNotes} />
          </div>
          <div className="mb-8">
            <NoteTags
              tags={['Work', 'Personal', 'Ideas']} // Example tags, replace with your own
              onSelectTag={filterNotesByTag}
            />
          </div>
          <div>
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
        </div>
        <Routes>
          <Route
            path="/edit/:id"
            element={
              <NoteEdit
                notes={notes}
                onNoteUpdate={updateNote}
                onNoteDelete={deleteNote}
              />
            }
          />
          <Route path="/add" element={<NoteForm onSave={addNote} />} />
          <Route
            path="/archive"
            element={<NoteArchive notes={notes} onArchive={updateNote} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
