import React, {useState} from "react"
import Item from "./Item"
import ItemForm from "./ItemForm";
import itemsData from "../data/items"

function Filter ({change, display, onSearchChange, search}) {
    const [items, setItems] = useState(itemsData)

    function handleOnSearchChange(event){
        onSearchChange(event.target.value)
    }
    function handleItemFormSubmit(newItem) {
        setItems([...items, newItem]);
      }
    return (
        <div className="ShoppingList">
        <ItemForm onItemFormSubmit={handleItemFormSubmit} />
        <div className="Filter">
        <input onChange = {handleOnSearchChange}
        type = "text"
        name = "search"
        placeholder = "Search..."
        value = {search}
        />

        <select onChange = {change}
        name="filter">
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        
        <ul className="Items">
          {display.map(item => {
            return <Item key = {item.id} id = {item.id} name = {item.name} category = {item.category}/>
  })}
        </ul>
      </div>

    )

}

export default Filter