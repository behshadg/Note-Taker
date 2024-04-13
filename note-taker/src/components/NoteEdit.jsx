import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NoteEdit = ({ notes, onNoteUpdate, onNoteDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    const foundNote = notes.find((n) => n.id === id);
    if (foundNote) {
      setNote(foundNote);
    } else {
      navigate('/');
    }
  }, [id, notes, navigate]);

  const handleTitleChange = (e) => {
    setNote({ ...note, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setNote({ ...note, content: e.target.value });
  };

  const handleSave = () => {
    onNoteUpdate(note);
    navigate('/');
  };

  const handleDelete = () => {
    onNoteDelete(note.id);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Edit Note</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={note.title}
            onChange={handleTitleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={note.content}
            onChange={handleContentChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Save
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteEdit;

// import React, { useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';

// const NoteEdit = ({ notes, onSave }) => {
//   const { id } = useParams();
//   const history = useHistory();
//   const note = notes.find((note) => note.id === id);
//   const [title, setTitle] = useState(note.title);
//   const [content, setContent] = useState(note.content);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedNote = { id, title, content };
//     onSave(updatedNote);
//     history.push('/');
//   };

//   return (
//     <div>
//       <h2>Edit Note</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default NoteEdit;
