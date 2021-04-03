export default function ListItem({
  index,
  name,
  isComplete,
  onTogglePresence,
  onDelete,
}) {
  function handleDeleteClick() {
    onDelete(index);
  }

  function handleToggleClick() {
    onTogglePresence(name, index);
  }

  const listCompleted = isComplete ? "ListItemCompleted" : "ListItemPending";
  const classFilter = isComplete ? "completed" : "pending";

  return (
    <section className={`List ${listCompleted} all ${classFilter}`}>
      <button id={index} className="ListItemDelete" onClick={handleDeleteClick}>
        x
      </button>
      <div>{name}</div>
      <button onClick={handleToggleClick}>
        {isComplete ? "Completed" : "Pending"}
      </button>
    </section>
  );
}
