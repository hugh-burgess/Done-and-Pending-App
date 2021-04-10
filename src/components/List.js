import ListItem from "./ListItem.js";

export default function List({
  listItems,
  handleToggle,
  handleDeleteToDo,
  handleRenamingToDo,
}) {
  function renderList() {
    return listItems.map((toDoBox) => {
      return (
        <ListItem
          handleRenamingToDo={handleRenamingToDo}
          index={toDoBox.index}
          name={toDoBox.name}
          isComplete={toDoBox.isComplete}
          onTogglePresence={handleToggle}
          onDelete={handleDeleteToDo}
        />
      );
    });
  }
  return <main className="listedItem">{renderList()}</main>;
}
