import React, {useState} from 'react'
// import Item from "./Item"
import Filter from "./Filter"
import itemsData from "../data/items"


function ShoppingList({items}) {
    const [selectCategory, setselectCategory]= useState("All")
    const [search, setSearch] = useState("")

    function handleCategoryChange(e) {
    setselectCategory(e.target.value)  
    }

    const display = items
    .filter(item => {
    if (selectCategory === "All")
    {return true}
    else
    {return item.category === selectCategory}
    })

    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    
  return (
   <Filter change = {handleCategoryChange} display = {display} search = {search} onSearchChange = {setSearch}/>
  );
}

export default ShoppingList;