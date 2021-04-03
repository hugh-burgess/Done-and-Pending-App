import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";
import React from "react";

export default function App() {
  const [toDoBox, setToDoBox] = useState([]);

  function handleDeleteToDo(index) {
    console.clear();

    const NewToDoName = toDoBox.filter((toDoBox) => toDoBox.index !== index);
    setToDoBox(NewToDoName);
    console.log("deleted!");
  }

  function handleToggle(name, index) {
    const NewToDoName = toDoBox.map((toDoBox) => {
      if (toDoBox.index === index) {
        console.log(
          `The list item with index number ${toDoBox.index} is now marked ${
            !toDoBox.isComplete ? "Active" : "Completed"
          }`
        );
        return {
          ...toDoBox,
          isComplete: !toDoBox.isComplete,
        };
      } else {
        return toDoBox;
      }
    });

    console.log(NewToDoName);
    setToDoBox(NewToDoName);
  }

  function handleAddToDo(inputName) {
    // console.clear();
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
        // console.log(
        //   `The list item with index number ${toDoBox.index} is now marked ${
        //     !toDoBox.isComplete ? "Active" : "Completed"
        //   }`
        // );
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
      <Header onAddToDo={handleAddToDo} />
      <List
        handleRenamingToDo={handleRenamingToDo}
        setToDoBox={setToDoBox}
        listItems={toDoBox}
        handleToggle={handleToggle}
        handleDeleteToDo={handleDeleteToDo}
      />
    </div>
  );
}
