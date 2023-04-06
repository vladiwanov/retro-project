import React, { useEffect, useCallback } from 'react';
import s from './Modal.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onToggle }) => {
  const handleKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onToggle();
      }
    },
    [onToggle],
  );

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggle();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', e => handleKeydown(e));
    window.removeEventListener('keydown', e => handleKeydown(e));
  }, [handleKeydown]);

  return createPortal(
    <div className={s.modalSection}>
      <div className={s.modalBackdrop} onClick={handleBackdropClick}>
        <div className={s.modalContent}>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
};
export default Modal;
