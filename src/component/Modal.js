// Modal.js

import React from 'react';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import './modal.css';

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} // Use onClose instead of onRequestClose
      contentLabel="Example Modal"
      style={{
        overlay: {
          position: 'fixed',
          zIndex: 1020,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <CloseIcon />
        </span>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
