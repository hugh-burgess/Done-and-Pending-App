import { AiFillEdit } from "react-icons/ai";

export default function ListItem({
  index,
  name,
  isComplete,
  onTogglePresence,
  onDelete,
  handleRenamingToDo,
}) {
  function handleDeleteClick() {
    onDelete(index);
  }

  function handleToggleClick() {
    onTogglePresence(name, index);
  }

  function handleEditName(index) {
    const editMessage = prompt("Please rename here...");
    handleRenamingToDo(editMessage, index);
  }
  const listCompleted = isComplete ? "ListItemCompleted" : "ListItemPending";
  const classFilter = isComplete ? "completed" : "active";

  return (
    <section className={`List ${listCompleted} all ${classFilter}`}>
      <button id={index} className="ListItemDelete" onClick={handleDeleteClick}>
        x
      </button>
      <div className="nameWrapper">
        <div className="name">{name}</div>
        <AiFillEdit
          className="editIcon"
          onClick={() => handleEditName(index)}
        />
      </div>

      <button onClick={handleToggleClick}>
        {isComplete ? "Completed" : "Active"}
      </button>
    </section>
  );
}
