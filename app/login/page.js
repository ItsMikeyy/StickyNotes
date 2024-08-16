
import Button from '@/components/Button'
import Input from '@/components/Input'
import Main from '@/components/Main'
import React from 'react'

const LoginPage = () => {
  return (
    <Main>
        <div className='flex flex-col gap-8 w-full items-center'>
            <h1 className='text-center text-5xl'>Login</h1>
            <Input place="Email" />
            <Input place="Password" />
            <Button text="Login"/>
            <p className='text-2xl'>Don't have an account? <span className='text-yellow-400'>Sign up!</span></p>
        </div>
    </Main>
  )
}

export default LoginPage