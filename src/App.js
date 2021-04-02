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
  }

  function handleAddToDo(inputName) {
    console.clear();
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
      }
      setToDoBox(NewToDoName);
    }
    console.log(NewToDoName);
  }

  function handleToggle(name) {
    const NewToDoName = toDoBox.map((input) => {
      if (input.name === name) {
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

  function CompletedList({ value }) {
    return (
      <div className="completedList">
        <h2>Completed List</h2>
        <ul className="ulCompletedList">
          <li>{value}</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="App">
      <Header onAddToDo={handleAddToDo} />
      <List
        listItems={toDoBox}
        handleToggle={handleToggle}
        handleDeleteToDo={handleDeleteToDo}
      />
      <CompletedList />
    </div>
  );
}
