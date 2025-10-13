import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:rchang825@hotmail.com" className="contact-link">
          <FaEnvelope size={24} />
          <span>rchang825@hotmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/rchang825" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaLinkedin size={24} />
          <span>linkedin.com/in/rchang825</span>
        </a>
        <a href="https://github.com/rchang825" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaGithub size={24} />
          <span>github.com/rchang825</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;