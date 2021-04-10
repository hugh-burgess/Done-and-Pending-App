import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";
import React from "react";

export default function App() {
  const [toDos, setToDos] = useState([]);

  const [filter, setFilter] = useState("");
  let filterBox = toDos;
  if (filter !== "") {
    filterBox = toDos.filter((todo) => todo.isComplete === filter);
  }

  function handleDeleteToDo(index) {
    console.clear();

    const newTDs = toDos.filter((todo) => todo.index !== index);
    setToDos(newTDs);
  }

  function handleToggle(index) {
    const newTDs = toDos.map((toDos) => {
      if (toDos.index === index) {
        return {
          ...toDos,
          isComplete: !toDos.isComplete,
        };
      } else {
        return toDos;
      }
    });

    setToDos(newTDs);
  }

  function handleAddToDo(inputName) {
    const newTDs = [
      ...toDos,
      {
        name: inputName,
        isComplete: false,
      },
    ];

    for (let i = 0; i < newTDs.length; i++) {
      newTDs[i].index = i;

      setToDos(newTDs);
    }
  }

  function handleRenamingToDo(newTDs, index) {
    const newTDName = toDos.map((toDos) => {
      if (toDos.index === index) {
        return {
          ...toDos,
          name: newTDs,
        };
      } else {
        return toDos;
      }
    });

    setToDos(newTDName);
  }

  return (
    <div className="App">
      <Header onAddToDo={handleAddToDo} onFilterChange={setFilter} />

      <main className="main">
        <List
          handleRenamingToDo={handleRenamingToDo}
          listItems={filterBox}
          handleToggle={handleToggle}
          handleDeleteToDo={handleDeleteToDo}
        />
      </main>
    </div>
  );
}
