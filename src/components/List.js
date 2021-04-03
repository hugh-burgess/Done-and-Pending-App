import ListItem from "./ListItem.js";

export default function List({ listItems, handleToggle, handleDeleteToDo }) {
  function renderList() {
    return listItems.map((toDoBox) => {
      console.log(
        `Remaining indexes: list name '${toDoBox.name}' is index number ${toDoBox.index}`
      );
      return (
        <ListItem
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
