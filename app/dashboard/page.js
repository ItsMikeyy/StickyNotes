import Button from '@/components/Button'
import Main from '@/components/Main'
import Note from '@/components/Note'
import React from 'react'

const DashboardPage = () => {

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

    return (
    <Main>
            <div className='flex-1 grid grid-cols-3 gap-3 '>
                {notes.map((note, idx) => {
                    return <Note title={note.title} content={note.content} date={note.date} key={idx}/>
                })}
            </div>
            <div className='mx-auto'>
                <Button text="Create Note" />
            </div>
    </Main>
    )
}

export default DashboardPage