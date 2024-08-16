import Button from '@/components/Button'
import Main from '@/components/Main'
import Note from '@/components/Note'
import React from 'react'

const getNote = (id) => {
    console.log(id)
    const notes = [
        {
            id: "1",
            title: "Test1",
            content: "jdaklsdjkalsdj aksljkasl jaskl djakls jklasj mdksla jkasl",
            date: "Jan 21, 2022"
        },
        {
            id: "2",
            title: "Test2",
            content: "jdaklsdjkalsdj aksljkasl jaskl djakls jklasj mdksla jkasl asd asd sad sad as dasdasd sa dasd as das da as as ",
            date: "Jan 21, 2022"
        },
        {
            id: "3",
            title: "Test3",
            content: "jdaklsdjkalsdj aksljkasl jaskl",
            date: "Jan 21, 2022"
        },
        {
            id: "4",
            title: "Test4",
            content: "jdaklsdjkalsdj aksljkasl jaskl djakls jklasj mdksla jkasl asd asd sad sad as dasdasd sa dasd as das da as as ",
            date: "Jan 21, 2022"
        }
    ]

    const result = notes.find(key => key.id == id)
    return result
}

const NotePage = ({params}) => {
    const note = getNote(params.noteid)

    return (
        <Main>
        <Note title={note.title} content={note.content} date={note.date}/>
        <div className='p-4 mx-auto flex gap-4'>
            <Button text="Edit Note"/>
            <Button text="Delete Note"/>
        </div>
        </Main>
    )
}

export default NotePage