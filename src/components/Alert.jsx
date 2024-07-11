import React from 'react'

const Alert = ({type, text}) => {
  return (
    <div className="absolute top-12 left-0 right-0 flex justify-center items-center">
        <div className={`${type === 'danger'? "bg-red-800" : "bg-blue-800" } p-2 text-indigo-100 leading-none rounded-full flex lg:inline-flex items-center gap-1`} role = 'alert'>
            <p className={`${type === 'danger'? "bg-red-500" : "bg-blue-500" } flex rounded-full text-bold uppercase px-2 py-1`}>{type === 'danger' ? 'Failed':'Success'}</p>
            <p className="mr-2 text-left ">{text}</p>
        </div>
    </div>
  )
}

export default Alert