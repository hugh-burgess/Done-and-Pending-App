import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";



export default function App() {
   const [toDoBox, setToDoBox] = useState([]);


  function handleDeleteToDo(name) {
    const NewToDoName = toDoBox.filter((toDoBox) => toDoBox.name !== name);
  
  setToDoBox(NewToDoName);
  }

  function handleAddToDo(inputName) {
    const NewToDoName = [
      ...toDoBox,
      {
        name: inputName,
        isComplete: true
      }
    ];
    setToDoBox(NewToDoName)
  }

  function handleToggle(name) {
    const NewToDoName = toDoBox.map((input) => {
    if (input.name === name) {
    return {
    ...input, 
    isComplete: !input.isComplete
    }; 
    } else {
    return input
      }
    });
      setToDoBox(NewToDoName)
    }
  

  return (
    <div className="App">
      <Header onAddToDo={handleAddToDo}/>
      <List 
      listItems={toDoBox} 
      handleToggle={handleToggle} 
      handleDeleteToDo={handleDeleteToDo}
      />
      
    </div>
  );
  
};