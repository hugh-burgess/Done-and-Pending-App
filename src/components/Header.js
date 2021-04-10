import React from "react";

export default function Header({ onAddToDo, onFilterChange }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onAddToDo(form.input.value);

    form.reset();
  }

  function handleFilterAll() {
    onFilterChange("");
  }

  function handleFilterActive() {
    onFilterChange(false);
  }

  function handleFilterCompleted() {
    onFilterChange(true);
  }

  return (
    <header className="header">
      <form onSubmit={handleSubmit}>
        <input
          className="inputBox"
          maxlength="11"
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
        <button onClick={handleFilterAll} className="buttonOptions">
          All
        </button>
        <button onClick={handleFilterActive} className="buttonOptions">
          Active
        </button>
        <button onClick={handleFilterCompleted} className="buttonOptions">
          Completed
        </button>
      </div>
    </header>
  );
}
