import React, { useState, useEffect } from 'react'
import './styles/App.css'
import projects from './data/projects.js'
import Card from './components/Card.jsx'

function App() {

  return (
    <div className="app">
      <header className="main">
        <h1>Ruby Chang</h1>
      </header>
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
        />
      ))}
      </div>
    </div>
  )
}

export default App;