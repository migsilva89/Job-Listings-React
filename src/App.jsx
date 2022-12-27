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
    } else {
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

  const clearFilters = (event) => {
    setSelectedFilters([])
  }
  return (
    <main className="relative">
      <header className="bg-cyan-400 sm:min-h-32 md:min-h-48 lg:min-h-64 xl:min-h-80">
        <img
          src="./images/bg-header-desktop.svg"
          alt=""
          className="min-w-max"
        />
      </header>
      {selectedFilters.length > 0 && (
        <section className="absolute inset-0 h-16 pt-1 bg-white top-28 mt-3 mx-20 rounded-md ">
          <div className="flex justify-between px-6">
            <div className="flex">
              {selectedFilters.map((filter, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 font-bold m-3 text-center"
                >
                  <div className="bg-gray-300 text-xs col-span-3 pt-2 rounded-l-sm px-2">
                    {filter}
                  </div>
                  <button
                    onClick={handleRemove}
                    value={filter}
                    className="col-span-1 bg-gray-700 text-white rounded-r-sm px-2 py-1"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <div
              onClick={clearFilters}
              className="grid grid-cols-4 font-bold m-3 text-center cursor-pointer"
            >
              <div className="bg-gray-300 text-xs col-span-3 pt-2 rounded-l-sm px-2">
                Clear
              </div>
              <div className="col-span-1 bg-gray-700 text-white rounded-r-sm text-sx font-bold px-2 py-1">
                X
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        className={
          selectedFilters.length == 0
            ? 'bg-cyan-50 h-screen'
            : 'bg-cyan-50 h-screen pt-6'
        }
      >
        {finalJobs.map((jobs, index) => (
          <CardComponent key={index} jobs={jobs} handleFilter={handleFilter} />
        ))}
      </section>
    </main>
  )
}

export default App
