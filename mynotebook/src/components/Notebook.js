// src/components/Notebook.js
import React, { useState } from 'react';
import Note from './Note';
import Modal from './Modal';
import './styles.css'; // Make sure to include the Notebook-specific CSS

const Notebook = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = () => {
    if (noteText.trim() === '') return;

    const newNote = {
      id: Date.now(),
      text: noteText
    };
    setNotes([...notes, newNote]);
    setNoteText('');
    setIsModalOpen(false);

    
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="notebook">
      <h1>Notebook</h1>
      <button onClick={() => setIsModalOpen(true)}>Add Note</button>
      <div className="notes-list">
        {notes.map(note => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addNote}
        noteText={noteText}
        setNoteText={setNoteText}
      />
    </div>
  );
};

export default Notebook;
