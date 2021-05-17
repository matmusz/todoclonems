import React from 'react'


export default function Task( {task, tasks} ) {

    const urgent = () => {

        tasks.forEach(el => {
            if(el.id === task.id){
                task.urgent = !task.urgent 
            }   
        });
    }

    return (
        <div>
           <li>{task.name}</li>
            <button>Complete</button>
            <button>Delete</button>
            <button onClick={urgent}>Urgent</button>
        </div>
    )
}
