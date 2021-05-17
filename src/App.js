import './App.css';
import React, {useState, useEffect} from "react"
import Lists from "./components/Lists"
import Tasks from "./components/Tasks"
import NewListForm from "./components/NewListForm"
import NewTaskForm from "./components/NewTaskForm"
import Important from "./components/Important"
 
function App() {

  const [inputNameList, setInputNameList] = useState("")
  const [lists, setLists] = useState([])
  const [taskName, setTaskName] = useState("")
  const [tasks, setTasks] = useState([])
  const [listName, setListName] = useState("")
  const [importantList, setImportantList] = useState(false)
  

  useEffect(() => {
    // Update the document title using the browser API
    
  }, [lists]);

  return (
    <div className="app">

      <header>
        <nav className="navbar">
          <div>
            <button>
              <img src="" alt="" />
            </button>
            <a href="">TODO</a>
          </div>
          <div className="search-nav">
            <input type="text" />
          </div>
          <div>
            <button></button>
            <button></button>
          </div>
        </nav>
      </header>

      <div className="main">
        <section>
          <nav className="nav-side">
            <button className="btn">Extend</button>
            <button className="btn">My Day</button>
            <Important setImportantList={setImportantList}/>
          </nav>

          
          <Lists  
            lists={lists} 
            setLists={setLists}
            tasks={tasks}
            setTasks={setTasks}
            setListName={setListName}
            listName={listName}
          />

          <div className="new-list">
            <NewListForm 
              inputNameList={inputNameList} 
              setInputNameList={setInputNameList} 
              lists={lists} 
              setLists={setLists}
              setListName={setListName}
              />
          </div>

   

        </section>

        <main>
          <div>
            <h2>{listName}</h2>
            <NewTaskForm
             listName={listName}
             tasks={tasks}
             setTasks={setTasks}
             taskName={taskName}
             setTaskName={setTaskName}
            />
            <Tasks 
            tasks={tasks}
            listName={listName}
            importantList={importantList}
            />
            
          </div>
        </main>
      </div>
      
    </div>
  );
}

export default App;
