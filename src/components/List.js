import React from 'react'
import Task from "./Task"

export default function List( {name, setLists, lists, list, setListName} ) {

    const deleteList = () => {
      setLists(lists.filter( el => el.id !== list.id))
      setListName("")
    }

    const onClick = () => {
        lists.forEach(el => {
            if(el.id === list.id){
                setListName(list.name) 
            }   
        });
    }
    return (
        <div>
            <li onClick={onClick} className="list-item">{name}</li>
            <button>Complete</button>
            <button onClick={deleteList}>Delete</button>
        </div>
    )
}
