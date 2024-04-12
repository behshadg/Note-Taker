import React, { useState } from 'react';

const NoteEdit = ({ note, onSave }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    const editedNote = {
      ...note,
      title,
      content,
    };
    onSave(editedNote);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave}>Save Changes</button>
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
