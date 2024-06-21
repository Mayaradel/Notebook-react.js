// src/components/Modal.js
import React from 'react';
import './styles.css';

const Modal = ({ isOpen, onClose, onSave, noteText, setNoteText }) => {
    if (!isOpen) return null;

    
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add a Note</h2>
                <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Write your note here..."
                ></textarea>
                <div className="modal-buttons">
                    <button onClick={onSave}>Save</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
