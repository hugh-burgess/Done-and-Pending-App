export default function Header({ onAddToDo, isToggled }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onAddToDo(form.input.value);

    form.reset();
  }

function filterSelection1() {
  const all = document.getElementsByClassName("all")
  const main = document.querySelector("main")
  main.append(all) 
  console.log(all)

}

function filterSelection2() {
  const pending = document.getElementsByClassName("pending")
  const completed = document.getElementsByClassName("completed")
  const main = document.querySelector("main")
  main.append(pending)
console.log(pending)
}

function filterSelection3() {
  const completed = document.getElementsByClassName("completed")
  const main = document.querySelector("main")
  main.append(completed)
console.log(completed)
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
      <button onClick={filterSelection1} className="buttonOptions">All</button>
      <button onClick={filterSelection2} className="buttonOptions">Pending</button>
      <button onClick={filterSelection3} className="buttonOptions">Completed</button>
      </div>
      
    </header>
  );
}
