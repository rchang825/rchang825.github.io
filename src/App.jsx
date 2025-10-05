import React, { useState, useEffect } from 'react'
import './styles/App.css'
import projects from './data/projects.js'
import Card from './components/Card.jsx'

function App() {
  // useEffect(() => {
    // You can add your anime.js animations here
    // For example:
    // animate({
    //   targets: '.my-element',
    //   translateX: 250,
    //   duration: 2000
    // })
  // }, [])

  return (
    <div className="app">
      <header className="main">
        <h1>My Animated Portfolio</h1>
      </header>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          stack={project.stack}
          link={project.link}
        />
      ))}
    </div>
  )
}

export default App