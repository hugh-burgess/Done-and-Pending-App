import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";
import React from "react";

export default function App() {
  const [toDoBox, setToDoBox] = useState([]);

  const [filter, setFilter] = useState("");
  let filterBox = toDoBox;
  if (filter !== "") {
    filterBox = toDoBox.filter((toDoBox) => toDoBox.isComplete === filter);
  }

  console.log(filterBox);
  function handleDeleteToDo(index) {
    console.clear();

    const NewToDoName = toDoBox.filter((toDoBox) => toDoBox.index !== index);
    setToDoBox(NewToDoName);

    console.log("deleted!");
  }

  function handleToggle(name, index) {
    const NewToDoName = toDoBox.map((toDoBox) => {
      if (toDoBox.index === index) {
        return {
          ...toDoBox,
          isComplete: !toDoBox.isComplete,
        };
      } else {
        return toDoBox;
      }
    });

    setToDoBox(NewToDoName);
  }

  function handleAddToDo(inputName) {
    console.clear();

    const NewToDoName = [
      ...toDoBox,
      {
        name: inputName,
        isComplete: false,
      },
    ];

    for (let i = 0; i < NewToDoName.length; i++) {
      NewToDoName[i].index = i;
      console.log(
        `${NewToDoName[i].name} has index number ${NewToDoName[i].index}`
      );
      setToDoBox(NewToDoName);
    }

    console.log(NewToDoName);
  }

  function handleRenamingToDo(newToDoName, index) {
    console.log(index);
    const newTDName = toDoBox.map((toDoBox) => {
      if (toDoBox.index === index) {
        return {
          ...toDoBox,
          name: newToDoName,
        };
      } else {
        return toDoBox;
      }
    });

    setToDoBox(newTDName);
    console.log(newTDName);
  }

  return (
    <div className="App">
      <Header onAddToDo={handleAddToDo} setFilter={setFilter} />

      <main className="main">
        <List
          handleRenamingToDo={handleRenamingToDo}
          setToDoBox={setToDoBox}
          listItems={filterBox}
          handleToggle={handleToggle}
          handleDeleteToDo={handleDeleteToDo}
        />
      </main>
    </div>
  );
}
