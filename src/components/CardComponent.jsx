import React from 'react'

function CardComponent(props) {
  const { jobs, handleFilter, jobClicked, setJobClicked } = props

  return (
    <div className="py-6 sm:px-20 px-5 max-w-7xl mx-auto">
      <div className="bg-white py-5 px-10 lg:flex lg:justify-between items-center drop-shadow-2xl rounded-lg">
        <div className="lg:flex gap-5 items-center">
          <div className="lg:mt-0 -mt-12">
            <img src={jobs.logo} alt="" className="w-14 lg:w-full" />
          </div>
          <div className="flex pb-1 pt-1">
            <div>
              <div className="flex gap-3 pb-1">
                <div className="text-darkCyan font-bold pt-1 text-md">
                  {jobs.company}
                </div>
                {jobs.new && (
                  <div className="text-white text-sm bg-darkCyan rounded-full font-bold flex items-center px-2.5 my-0.5">
                    NEW!
                  </div>
                )}
                {jobs.featured && (
                  <div className="text-white bg-veryDarkCyan flex items-center px-2.5 rounded-full font-bold text-sm my-0.5">
                    FEATURED
                  </div>
                )}
              </div>
              <div
                value={jobs.position}
                onClick={(event) => {
                  setJobClicked(event.target.value)
                }}
              >
                <button
                  value={jobs.position}
                  onClick={(event) => {
                    setJobClicked(event.target.value)
                  }}
                  className="font-bold py-1 tracking-wider text-start text-lg hover:text-darkCyan text-black"
                >
                  {jobs.position}
                </button>
              </div>
              <div className="flex gap-3 text-md text-darkCyan pt-1">
                <div>{jobs.postedAt}</div>·<div>{jobs.contract}</div>·
                <div>{jobs.location}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden h-0.5 w-full bg-gray-200 mt-3"></div>
        <div className="">
          <div
            className={`flex flex-wrap pt-5 lg:pt-0 gap-5 text-darkCyan font-bold text-md lg:ml-10`}
          >
            {jobs.filters.map((filter, index) => (
              <button
                onClick={handleFilter}
                className="bg-lightCyan hover:bg-darkCyan hover:text-white px-3 py-1 flex justify-center items-center rounded-md shadow-md"
                key={index}
                value={filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
