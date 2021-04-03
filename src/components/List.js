import ListItem from "./ListItem.js";

export default function List({
  setToDoBox,
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
          setToDoBox={setToDoBox}
          index={toDoBox.index}
          name={toDoBox.name}
          isComplete={toDoBox.isComplete}
          onTogglePresence={handleToggle}
          onDelete={handleDeleteToDo}
        />
      );
    });
  }
  return <main className="ListedItem">{renderList()}</main>;
}
