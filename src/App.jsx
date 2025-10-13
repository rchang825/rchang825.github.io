import React, { useState, useEffect } from 'react'
import './styles/App.css'
import projects from './data/projects.js'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Modal from './components/Modal.jsx'
import AboutMe from './components/AboutMe.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="app">
      <Nav />
      <Header />
      <div className="projects" id="projects">
        <h2>Featured Projects</h2>
        <div className="card-container">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              stack={project.stack}
              role={project.role}
              link={project.link}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
      </div>
      <AboutMe />
      <Contact />

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProject.title}
          image={selectedProject.image}
          description={selectedProject.description}
          stack={selectedProject.stack}
          role={selectedProject.role}
          link={selectedProject.link}
        />
      )}
    </div>
  )
}

export default App;