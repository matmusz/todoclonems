import React from 'react'

export default function Important( {tasks, setImportantList}) {

    const setImportant = () => {
        setImportantList = true
    }

    return (
        
            <button onClick={setImportant} className="btn">Important</button>
        
    )
}
