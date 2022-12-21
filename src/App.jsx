import React, { useState, useEffect } from 'react'
import './App.css'
import data from '../data.json'
import CardComponent from './components/CardComponent'

let dataClone = []

data.forEach((job) => {
  job.filters = [job.role, job.level]
  job.languages.filter((language) => {
    job.filters.push(language)
  })
  job.tools.filter((tool) => {
    job.filters.push(tool)
  })
  dataClone.push(job)
})

function App() {
  return (
    <main>
      <header className="bg-cyan-400">
        <img src="./images/bg-header-desktop.svg" alt="" />
      </header>
      <section className="bg-cyan-50 h-screen">
        {dataClone.map((jobs, index) => (
          <CardComponent key={index} jobs={jobs} />
        ))}
      </section>
    </main>
  )
}

export default App
