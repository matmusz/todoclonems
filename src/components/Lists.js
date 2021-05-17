import React from 'react'
import List from "./List"

export default function Lists( {lists, setLists, setListName} ) {
    return (
        <div>
            <ul>
              {lists.map( list => (
              <List 
                name={list.name} 
                key={list.id} 
                lists={lists} 
                setLists={setLists}
                list={list}
                setListName={setListName}
              />))}
            </ul>
        </div>
    )
}
