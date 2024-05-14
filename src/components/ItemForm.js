import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewItem(prevItem => ({
      ...prevItem,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(newItem);
    // reset input field after submission
    setNewItem({
      id: uuid(),
      name: "",
      category: "Produce",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;