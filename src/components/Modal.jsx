import React from 'react'

function Modal(props) {
  return (
    <div className="bg-lightCyan bg-opacity-95 md:px-20 px-8 py-10 max-w-7xl rounded-md ">
      <div className="flex justify-start ">
        <button
          onClick={() => {
            props.setJobClicked('')
          }}
          className="bg-lightCyan shadow-md drop-shadow-lg font-bold hover:bg-darkCyan text-darkCyan hover:text-white p-2 mb-8 text-sm md:text-lg rounded-md"
        >
          Back to List
        </button>
      </div>
      <h1 className="text-2xl text-darkCyan font-bold">{props.jobClicked}</h1>
      <p className='pt-3 text-darkCyan'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam autem
        repudiandae eveniet minus nobis mollitia facilis quas, earum, distinctio
        ut maiores quibusdam minima aperiam impedit quam dolor, reiciendis
        voluptas repellat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam autem
        repudiandae eveniet minus nobis mollitia facilis quas, earum, distinctio
        ut maiores quibusdam minima aperiam impedit quam dolor, reiciendis
        voluptas repellat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam autem
        repudiandae eveniet minus nobis mollitia facilis quas, earum, distinctio
        ut maiores quibusdam minima aperiam impedit quam dolor, reiciendis
        voluptas repellat.
      </p>
    </div>
  )
}

export default Modal
