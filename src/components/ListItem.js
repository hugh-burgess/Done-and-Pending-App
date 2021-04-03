import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";

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
  const classFilter = isComplete ? "completed" : "active";

  const [taskName, setTaskName] = useState(`${name}`);
  function handleEditName() {
    const editMessage = prompt("Please enter a new name...");
    if (editMessage !== "" && editMessage !== null) {
      setTaskName(editMessage);
      console.log(`${name} is now called '${editMessage}'`);
    }
  }

  return (
    <section className={`List ${listCompleted} all ${classFilter}`}>
      <button id={index} className="ListItemDelete" onClick={handleDeleteClick}>
        x
      </button>
      <div className="nameWrapper">
        <div className="name">{taskName}</div>
        <AiFillEdit className="editIcon" onClick={handleEditName} />
      </div>

      <button onClick={handleToggleClick}>
        {isComplete ? "Completed" : "Active"}
      </button>
    </section>
  );
}
