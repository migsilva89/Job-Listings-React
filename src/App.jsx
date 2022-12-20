import React, { useState, useEffect } from 'react'
import './App.css'
import data from '../data.json'
import CardComponent from './components/CardComponent'

function App() {
  const [filters, setFilters] = useState([])

  return (
    <main>
      <header className="bg-cyan-400">
        <img src="./images/bg-header-desktop.svg" alt="" />
      </header>
      <section className="bg-cyan-50 h-screen">
        {data.map((card, index) => (
          <CardComponent
            key={index}
            jobs={card}
            filters={filters}
            setFilters={setFilters}
          />
        ))}
      </section>
    </main>
  )
}

export default App
