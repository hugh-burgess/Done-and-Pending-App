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
    console.clear();

    const NewToDoName = toDoBox.map((input) => {
      if (input.index === index) {
        console.log(
          `The list item with index number ${input.index} is now marked ${
            !input.isComplete ? "Completed" : "Active"
          }`
        );
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
      if (NewToDoName[i].isComplete === false) {
        console.log(`The list '${NewToDoName[i].name}' is now set to Active`);
      } else {
        console.log(
          `The list name '${NewToDoName[i].name}' was created and is default Active`
        );
      }

      NewToDoName[i].index = i;
      console.log(
        `${NewToDoName[i].name} has index number ${NewToDoName[i].index}`
      );
      setToDoBox(NewToDoName);
    }

    console.log(NewToDoName);
  }

  return (
    <div className="App">
      <Header onAddToDo={handleAddToDo} />
      <List
        key={handleAddToDo}
        listItems={toDoBox}
        handleToggle={handleToggle}
        handleDeleteToDo={handleDeleteToDo}
      />
    </div>
  );
}
