
import Button from '@/components/Button'
import Input from '@/components/Input'
import Main from '@/components/Main'
import React from 'react'

const SignupPage = () => {
  return (
    <Main>
        <div className='flex flex-col gap-8 w-full items-center'>
            <h1 className='text-center text-5xl'>Sign Up</h1>
            <Input place="Email" />
            <Input place="Password" />
            <Button text="Sign Up"/>
            <p className='text-2xl'>Already have an account? <span className='text-yellow-400'>Login!</span></p>
        </div>
    </Main>
  )
}

export default SignupPage