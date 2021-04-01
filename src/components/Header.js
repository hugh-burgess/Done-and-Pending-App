export default function Header({onAddToDo}) {
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
          id="input"
          name="input"
          type="text"
          placeholder="Your Todo here..."
          required
        />
        <button className="add-button" type="submit">
          Add{" "}
        </button>
      </form>
    </header>
  );
}
