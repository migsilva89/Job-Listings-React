import React, { useState, useEffect } from 'react'

function CardComponent(props) {
  const { jobs, handleFilter } = props

  return (
    <div className="py-6 px-20">
      <div className="bg-white py-5 px-10 flex justify-between items-center drop-shadow-2xl rounded-lg">
        <div className="flex gap-5">
          <div>
            <img src={jobs.logo} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <div className="flex gap-3 text-xs">
                <div className="text-cyan-500 font-bold pt-1">
                  {jobs.company}
                </div>
                <div className="text-white bg-cyan-500 rounded-full font-bold py-1 px-3">
                  NEW
                </div>
                <div className="text-white bg-black py-1 px-2 rounded-full font-bold">
                  FEATURED
                </div>
              </div>
              <div>
                <h2 className="font-bold py-1 tracking-wider text-md">
                  {jobs.position}
                </h2>
              </div>
              <div className="flex gap-5 text-xs text-gray-400 font-bold">
                <div>1d ago</div>·<div>Full time</div>·<div>Usa only</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 text-cyan-600 font-bold text-sm">
          {jobs.filters.map((filter, index) => (
            <button 
            onClick={handleFilter}
            className="bg-cyan-100 px-2 py-1 rounded-md"
            key={index}
            value={filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardComponent
