import React, {useState} from "react"

function Item({id, name, category}) {
  const [addCart, setaddCart] = useState(true)
  function handleaddCartClick() {
    setaddCart (!addCart)
  }

  return (
    <li className={addCart? "": "in-cart"}>
      <span>{id}</span>
      <span>{name}</span>
      <span className="category">{category}</span>

      <button onClick = {handleaddCartClick} className= {addCart? "add":"remove"}>{addCart? "Add to Cart": "Remove from Cart"}</button>
    </li>
  );
}

export default Item;