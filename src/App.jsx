import React, { useState, useEffect } from 'react'
import './App.css'
import data from '../data.json'
import CardComponent from './components/CardComponent'
import FilterComponent from './components/FilterComponent'
import ClearComponent from './components/ClearComponent'
import Header from './components/Header'
import Modal from './components/Modal'

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
  const [jobClicked, setJobClicked] = useState('')

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
    <main className="font-spartan">
      {jobClicked.length > 0 && (
        <div
          onClick={() => {
            setJobClicked('')
          }}
          className="overflow-auto scrollbar-hide z-10 fixed w-screen h-screen lg:px-40 px-10 py-20 drop-shadow-2xl bg-black bg-opacity-75"
        >
          <div
            onClick={(event) => {
              event.stopPropagation()
            }}
            className="mx-auto max-w-7xl"
          >
            <div className="">
              <Modal jobClicked={jobClicked} setJobClicked={setJobClicked} />
            </div>
          </div>
        </div>
      )}

      <Header />

      {selectedFilters.length > 0 && (
        <section className="absolute inset-0 h-16 pt-1 top-28 mt-3 max-w-7xl mx-auto px-20">
          <div className="bg-white rounded-md">
            <div className="flex justify-between px-6 py-1">
              <div className="flex">
                {selectedFilters.map((filter, index) => (
                  <FilterComponent
                    key={index}
                    filter={filter}
                    handleRemove={handleRemove}
                  />
                ))}
              </div>
              <ClearComponent clearFilters={clearFilters} />
            </div>
          </div>
        </section>
      )}

      <section
        className={
          selectedFilters.length == 0
            ? 'bg-lightCyan h-screen'
            : 'bg-lightCyan h-screen pt-6'
        }
      >
        {finalJobs.map((jobs, index) => (
          <CardComponent
            key={index}
            jobs={jobs}
            handleFilter={handleFilter}
            setJobClicked={setJobClicked}
          />
        ))}
      </section>
    </main>
  )
}

export default App
