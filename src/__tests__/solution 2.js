import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [Darkmode, setDarkmode ] = useState(false)
  
  function handleDarkModeClick() {
    setDarkmode(!Darkmode)
  }

  return (
    <div className={Darkmode ? "App dark" : "App light"}>
      <header>
        <h2>Shopify</h2>
        <button onClick = {handleDarkModeClick}>{Darkmode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({items}) {
  const [selectCategory, setselectCategory] = useState ("All")

  function handleCategoryClick(event) {
    setselectCategory(event.target.value)
  }

  const itemDisplay = items.filter (item=> {
    if (selectCategory === "All") 
      {return true}
    else 
      {return item.category === selectCategory}
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange = {handleCategoryClick} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemDisplay.map( item => (
          <Item key={item.id} id = {item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

import React, {useState} from "react";

function Item({ id, name, category }) {
  const [AddCart, setAddCart] = useState(true)
  
  function handleAddCartClick() {
    setAddCart(!AddCart)
  }

  return (
    <li className={AddCart ? "" : "in-cart"}>
      <span>{id}</span>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={AddCart ? "add" : "remove"} onClick= {handleAddCartClick}>{AddCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;