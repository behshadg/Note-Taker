// NoteTags.js
import React, { useState } from 'react';

const NoteTags = ({ tags, onSelectTag }) => {
  const [selectedTag, setSelectedTag] = useState('');

  const handleTagClick = (tag) => {
    if (tag === selectedTag) {
      setSelectedTag('');
    } else {
      setSelectedTag(tag);
      onSelectTag(tag);
    }
  };

  return (
    <div>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          style={{ backgroundColor: tag === selectedTag ? 'blue' : 'grey' }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default NoteTags;
