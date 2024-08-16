import { Lilita_One} from 'next/font/google'
import React from 'react'
import Button from './Button'

const lilita = Lilita_One({ subsets: ["latin"], weight: ["400"] })

const Hero = () => {
  return (
    <div className='flex flex-col w-full py-12 text-center gap-8 al'>
        <h1 className='text-5xl font-semibold'><span className={"yellowGradient " + lilita.className}>Sticky Notes</span> lets you write quick notes and reminders!</h1>
        <div className='mx-auto grid grid-cols-2 gap-4'>
            <Button text="Login" />
            <Button text="Sign Up" />
        </div>
    </div>
  )
}

export default Hero