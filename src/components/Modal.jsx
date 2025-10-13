import React from 'react';
import { animated, useSpring } from '@react-spring/web';

function Modal({ isOpen, onClose, title, image, description, stack, role, link }) {
  // Modal backdrop animation
  const backdropSpring = useSpring({
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 30 }
  });

  // Modal content animation
  const modalSpring = useSpring({
    transform: isOpen ? 'translateY(0%) scale(1)' : 'translateY(-50%) scale(0.8)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 30 }
  });

  if (!isOpen) return null;

  return (
    <animated.div
      style={backdropSpring}
      className="modal-backdrop"
      onClick={onClose}
    >
      <animated.div
        style={modalSpring}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-image-container">
          <img src={image} alt={title} className="modal-image" />
        </div>

        <div className="modal-info">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-role">{role}</p>
          <p className="modal-description">{description}</p>
          <div className="modal-stack">
            <strong>Tech Stack: </strong>
            <span>{stack.join(', ')}</span>
          </div>

          <div className="modal-actions">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link-button"
            >
              View Project
            </a>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
}

export default Modal;