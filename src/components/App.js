
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  // State for managing items and theme mode
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); //setIsDakMode or ??
  };

 
  const handleItemFormSubmit = newItem => {
    setItems(prevItems => [...prevItems, newItem]);
  };
//rendering App compo */}
//Header is rendered with the props isDarkMode
//ShoppingList compo rendered with props { item 
  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
   
      <Header isDarkMode={isDarkMode} onDarkModeClick={toggleDarkMode} />
     
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;