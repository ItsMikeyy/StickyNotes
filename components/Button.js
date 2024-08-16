import React from 'react'

const Button = (props) => {
    const {text} = props
    return (
        <button className='px-8 py-3 border border-solid border-yellow-400 rounded-full border-2 duration-200 hover:opacity-60 w-fit '>{text}</button>
    )
}

export default Button