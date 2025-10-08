import React, { useState, useEffect } from 'react'
import './styles/App.css'
import projects from './data/projects.js'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import AboutMe from './components/AboutMe.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (
    <div className="app">
      <Nav />
      <Header />
      <div className="card-container projects" id="projects">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          stack={project.stack}
          role={project.role}
          link={project.link}
        />
      ))}
      </div>
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App;