import React, { useState, useEffect } from 'react'
import './App.css'
import data from '../data.json'
import CardComponent from './components/CardComponent'
import FilterComponent from './components/FilterComponent'
import ClearComponent from './components/ClearComponent'
import Header from './components/Header'
import Modal from './components/Modal'
import { reduce } from 'lodash'

const updatedData = data.map((job) => {
  job.filters = [job.role, job.level]
  job.filters = job.filters.concat(job.languages, job.tools)
  return job
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
    const filteredArrayOfObjects = reduce(
      data,
      (acc, job) => {
        if (selectedFilters.every((filter) => job.filters.includes(filter))) {
          acc.push(job)
        }
        return acc
      },
      [],
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
    <main className="font-spartan relative">
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
      <section className="bg-lightCyan h-full pt-10">
        {selectedFilters.length > 0 && (
          <div className=" max-w-7xl mx-auto sm:px-20 px-5 -mt-14 lg:mb-0 mb-5">
            <div className="bg-white rounded-md">
              <div className="flex sm:justify-between justify-around px-4 py-1 items-center">
                <div className="flex flex-wrap">
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
          </div>
        )}
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
