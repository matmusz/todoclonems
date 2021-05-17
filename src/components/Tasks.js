import React from 'react'
import Task from "./Task"

export default function Tasks( {tasks, listName, importantList} ) {

    

    return (
        <div>
            <ul>
                {tasks.map( task => {
                    if(task.list===listName){
                    return <Task 
                    task={task}
                    listName={listName}
                    tasks={tasks}
                    />
                    }})}
            </ul>
        </div>
    )
}
