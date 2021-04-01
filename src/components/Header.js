export default function Header({ onAddToDo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onAddToDo(form.input.value);
    console.log(`Input given: ${form.input.value}`);
    form.reset();
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
    </header>
  );
}
