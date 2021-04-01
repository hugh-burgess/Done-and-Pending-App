import ListItem from "./ListItem.js";

export default function List({ listItems, handleToggle, handleDeleteToDo }) {
  function renderList() {
    return listItems.map((toDoBox, index) => {
      return (
        <ListItem
          key={toDoBox.name}
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
