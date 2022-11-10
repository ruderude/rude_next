import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'

export const UpScrollBtn: React.FC = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className='sticky bottom-0 flex justify-end items-center mr-3'>
      <button onClick={returnTop} className='"shadow-md rounded-full bg-red-400 py-3 px-5 mb-3 bg-opacity-80 hover:bg-opacity-100'>
        <FontAwesomeIcon icon={faUpLong} size='lg' color='#fff' />
      </button>
    </div>
  )
}