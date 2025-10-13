import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

function Header() {
  return (
    <div className="header" id="header">
      <div className="header-text">
        <h3>Hello, I'm</h3>
        <h1>Ruby</h1>
        <h5>A Fullstack Software Engineer with a passion for passion.</h5>
        <div>
          Javascript | React | Node.js | RoR | SQL | NoSQL | AWS
        </div>
      </div>
      <div className="header-image">
        <img src="/public/images/ruby.jpeg" alt="Ruby Chang profile"/>
        <div className="intro-buttons">
            <a href="https://github.com/rchang825" target="_blank" rel="noopener noreferrer" className="contact-link-small">
              <FaGithub size={24} />
              <span>Github</span>
            </a>
            <a href="https://www.linkedin.com/in/rchang825" target="_blank" rel="noopener noreferrer" className="contact-link-small">
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="./images/resume.pdf" target="_blank" className="contact-link-small">
              <FaFileAlt size={24} />
              <span>Resume</span>
            </a>
        </div>
      </div>
    </div>

  );
}

export default Header;
