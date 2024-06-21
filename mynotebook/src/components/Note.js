// src/components/Note.js
import React from 'react';
import './styles.css'; // Make sure to include the Note-specific CSS

const Note = ({ note, onDelete }) => (
  <div className="note-card">
    <p>{note.text}</p>
    <button onClick={() => onDelete(note.id)}>Delete</button>
  </div>
);

export default Note;
