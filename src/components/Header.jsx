import React from 'react';

function Header() {
  return (
    <div className="header" id="header">
      <div className="header-text">
        <h3>Hello, I'm</h3>
        <h1>Ruby</h1>
        <h5>A Fullstack Software Engineer with a passion for passion.</h5>
        <div>
          Javascript | React | Node.js | SQL | NoSQL | AWS
        </div>
      </div>
      <div className="header-image">
        <img src="/public/images/ruby.jpeg" alt="Ruby Chang profile"/>
        <div className="intro-buttons">
            <a href="https://github.com/rchang825" target="_blank">
                <button className="pink-btn">
                    Github
                </button>
            </a>
            <a href="https://www.linkedin.com/in/rchang825" target="_blank">
                <button className="pink-btn">
                    LinkedIn
                </button>
            </a>
            <a href="./images/resume.pdf" target="_blank">
                <button className="pink-btn">
                    Resume
                </button>
            </a>
        </div>
      </div>
    </div>

  );
}

export default Header;
