import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";
import React from "react";

export default function App() {
  const [toDoBox, setToDoBox] = useState([]);

  function handleDeleteToDo(name) {
    const NewToDoName = toDoBox.filter((toDoBox) => toDoBox.name !== name);
    setToDoBox(NewToDoName);
    console.log(`deleted!`)
  }

  function handleAddToDo(inputName) {
    // console.clear();

    const NewToDoName = [
      ...toDoBox,
      {
        name: inputName,
        isComplete: true,
      },
    ];

    for (let i = 0; i < NewToDoName.length; i++) {
      if (NewToDoName[i].isComplete === false) {
        console.log(`${NewToDoName[i].name} is pending`);
      } else {
      console.log(`${NewToDoName[i].name} was created and is default completed`)
    }
      setToDoBox(NewToDoName);
    } 
    console.log(NewToDoName);
  }

  function handleToggle(name) {
    const NewToDoName = toDoBox.map((input) => {
      if (input.name === name) {
        console.log(`${input.name} is now marked ${!input.isComplete ? "Completed" : "Pending"}`);
        return {
          ...input,
          isComplete: !input.isComplete,
        };
      } else {
        return input;
      }
    });

    setToDoBox(NewToDoName);
  }

 


  return (
    <div className="App">
      <Header onAddToDo={handleAddToDo} />
      <List
        listItems={toDoBox}
        handleToggle={handleToggle}
        handleDeleteToDo={handleDeleteToDo}
      />
    </div>
  );
}
