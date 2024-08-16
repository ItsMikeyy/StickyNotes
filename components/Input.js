import React from 'react'

const Input = (props) => {
    const {bold, place} = props
  return (
    <input className={'border border-solid border-yellow-400 outline-none rounded-lg px-4 py-2 w-1/2 ' + (bold ? "placeholder:font-bold " : "") } placeholder={place}/>
  )
}

export default Input