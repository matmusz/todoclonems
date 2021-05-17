import React from 'react'

export default function NewTaskForm( {listName, setTasks, tasks, setTaskName, taskName} ) {

    const inputTextHandler = (e) => {
        setTaskName(e.target.value)
    }

    const submitInputTextHandler = (e) => {
        e.preventDefault()
        if(1===1){
        setTasks([
            ...tasks, {name: taskName, completed: false, id: taskName, list: listName, urgent: false}
        ])
        taskName = ""
    }}

    return (
        <div className={listName !== "" ? "new-task-input" : "new-task-input-disable"}>
            <form action="">
                <input value={taskName} onChange={inputTextHandler} type="text" />
                <button onClick={submitInputTextHandler}>Add</button>
            </form>
            
        </div>
    )
}
