import Button from '@/components/Button'
import Input from '@/components/Input'
import Main from '@/components/Main'
import React from 'react'

const AddNotePage = () => {
  return (
    <Main>
        <div className='mx-auto flex flex-col gap-8 w-full items-center'>
          <Input place="Title" bold />
          <textarea className='border border-solid border-yellow-400 outline-none rounded-lg px-4 py-2 w-1/2 h-[200px]' placeholder='Content' />
          <Button text="Create Note" />
        </div>
    </Main>
  )
}

export default AddNotePage