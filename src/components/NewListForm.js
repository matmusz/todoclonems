import React from 'react'


export default function NewListForm( {inputNameList, setInputNameList, lists, setLists, setListName} ) {

    const inputTextHandler = (e) => {
        setInputNameList(e.target.value)
    }

    const submitInputTextHandler = (e) => {
        e.preventDefault()
        setLists([
            ...lists, {name: inputNameList, completedList: false, id: inputNameList, tasks:[{name:"", completed: false}]}
        ])
        setInputNameList("")
        setListName(inputNameList)
    }
    return (
            <form action="">
              <img src="" alt="" />
              <input value={inputNameList} onChange={inputTextHandler} type="text" className="new-list-input" required/>
              <button onClick= {submitInputTextHandler} type="submit" className="new-list-btn">Submit</button>
            </form>
    )
}
