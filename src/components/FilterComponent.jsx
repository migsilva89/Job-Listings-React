import React from 'react'

function FilterComponent(props) {
  const { filter, handleRemove } = props
  return (
    <div className="grid grid-cols-4 font-bold m-3 text-center shadow-md">
      <div className="bg-lightCyan text-darkCyan text-md col-span-3 pt-1 rounded-l-sm px-2 text-">
        {filter}
      </div>
      <button
        onClick={handleRemove}
        value={filter}
        className="col-span-1 bg-darkCyan text-white rounded-r-sm px-2 flex items-center hover:bg-black hover:text-white"
      >
        X
      </button>
    </div>
  )
}

export default FilterComponent
