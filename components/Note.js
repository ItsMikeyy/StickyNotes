import React from 'react'

const Note = (props) => {
  const {title, content, date, idx} = props
    return (
    <div key={idx} className='w-full p-4 flex flex-col gap-8 bg-yellow-300 h-fit'>
        <p className='text-3xl'>{title}</p>
        <p>{content}</p>
        <p className='text-right'>{date}</p>
    </div>
  )
}

export default Note