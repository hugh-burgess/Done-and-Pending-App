import React from "react"

export default function Header({ onAddToDo, isToggled }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onAddToDo(form.input.value);

    form.reset();
  }

function filterAll() {
  const allArray = []
  const all = document.getElementsByClassName("all")
  allArray.push(all) 
  console.log(allArray)
}


function filterPending() {
  const pendingArray = []
  const pending = document.getElementsByClassName("pending")
  pendingArray.push(pending) 
  console.log(pendingArray)
}


function filterCompleted() {
  const completedArray = []
  const completed = document.getElementsByClassName("completed")
  completedArray.push(completed) 
  console.log(completedArray)
  }


  return (
    <header className="Header">
      <form onSubmit={handleSubmit}>
        <input
          className="inputBox"
          id="input"
          name="input"
          type="text"
          placeholder="Your todo..."
          required
        />
        <button className="addButton" type="submit">
          Add{" "}
        </button>
      </form>
      <div className="headerOptions">
      <button onClick={filterAll} className="buttonOptions">All</button>
      <button onClick={filterPending} className="buttonOptions">Pending</button>
      <button onClick={filterCompleted} className="buttonOptions">Completed</button>
      </div>
      
    </header>
  );
}



