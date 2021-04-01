export default function ListItem({
  name,
  isComplete,
  onTogglePresence,
  onDelete,
}) {
  function handleDeleteClick() {
    onDelete(name);
  }

  function handleToggleClick() {
    onTogglePresence(name);
  }

  const listCompleted = isComplete ? "ListItemCompleted" : "ListItemPending";

  return (
    <section className={`List ${listCompleted}`}>
      <button className="ListItemDelete" onClick={handleDeleteClick}>
        x
      </button>
      <div>{name}</div>
      <button onClick={handleToggleClick}>
        {isComplete ? "Completed" : "Pending"}
      </button>
    </section>
  );
}
