import React from "react";

export default function Header({ onAddToDo, setFilter }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onAddToDo(form.input.value);

    form.reset();
  }

  function handleFilterAll() {
  setFilter("")
  
  }

    function handleFilterActive() {
      setFilter(false)

  }

  function handleFilterCompleted() {
      setFilter(true)
  }


  return (
    <header className="header">
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
        <button onClick={handleFilterAll} className="buttonOptions">All</button>
        <button onClick={handleFilterActive} className="buttonOptions">Active</button>
        <button onClick={handleFilterCompleted} className="buttonOptions">Completed</button>
      </div>
    </header>
  );
}
