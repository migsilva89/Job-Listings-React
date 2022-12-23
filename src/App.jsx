import React, { useState, useEffect } from 'react'
import './App.css'
import data from '../data.json'
import CardComponent from './components/CardComponent'

data.forEach((job) => {
  job.filters = [job.role, job.level]

  job.languages.filter((language) => {
    job.filters.push(language)
  })

  job.tools.filter((tool) => {
    job.filters.push(tool)
  })
})

function App() {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [finalJobs, setFinalJobs] = useState(data)

  useEffect(() => {
    if (selectedFilters.length > 0) {
      handleData()
    } else if (selectedFilters.length === 0) {
      setFinalJobs(data)
    }
  }, [selectedFilters])

  const handleFilter = (event) => {
    if (selectedFilters.includes(event.target.value)) {
      return
    } else {
      setSelectedFilters([...selectedFilters, event.target.value])
    }
  }

  const handleData = () => {
    const filteredArrayOfObjects = data.filter((job) =>
      selectedFilters.every((filter) => job.filters.includes(filter)),
    )
    setFinalJobs(filteredArrayOfObjects)
  }

  const handleRemove = (event) => {
    setSelectedFilters(
      selectedFilters.filter((item) => item !== event.target.value),
    )
  }

  return (
    <main>
      <header className="bg-cyan-400">
        <img src="./images/bg-header-desktop.svg" alt="" />
      </header>
      <section className="flex">
        {selectedFilters.map((filter, index) => (
          <div
            key={index}
            className="grid grid-cols-4 font-bold m-3 text-center"
          >
            <div className="bg-gray-300 col-span-3 rounded-l-sm px-2">
              {filter}
            </div>
            <button
              onClick={handleRemove}
              value={filter}
              className="col-span-1  bg-gray-700 text-white rounded-r-sm"
            >
              X
            </button>
          </div>
        ))}
      </section>
      <section className="bg-cyan-50 h-screen">
        {finalJobs.map((jobs, index) => (
          <CardComponent key={index} jobs={jobs} handleFilter={handleFilter} />
        ))}
      </section>
    </main>
  )
}

export default App
