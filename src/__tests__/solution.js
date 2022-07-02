// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   //useState variables
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   //function for onClick
//   function handleDarkModeClick() {
//     //setter updates state with callback
//     setIsDarkMode((isDarkMode)=> !isDarkMode)
//   }
//   //changes class with state change
//   const appClass = isDarkMode ? "App dark" : "App"
// //? How does this translate to css class

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         {/* onClick function, body of button is tertiary argument */}
//         <button onClick={handleDarkModeClick}>{isDarkMode ? "Dark" : "Light"} </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;


// import React, {useState} from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   //set useState variables to All
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   //onChange function
//   function handleCategoryChange(event) {
//   // event.target.value will be the value selected by the user
//     setSelectedCategory(event.target.value);
//   }
//   // we want to filter the items to only display the ones based on the selected category(the .value is "All")
//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;
//     //state of category selection = item.category
//     return item.category === selectedCategory;
//   });


//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter" onChange ={handleCategoryChange} >
//         {/* value is All*/}
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {/* choose from the filter */}
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;




// import React, {useState} from "react";

// function Item({ name, category }) {
//   //useState variables
//   const [isInCart, setIsInCart] = useState(false);
//   //function for click
//   function handleAddToCartClick() {
//   //change state
//     setIsInCart((isInCart) => !isInCart);
//   }


//   return (
//     //state change, changes class style
//     <li className={isInCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//     {/* state change, changes class style */}
//       <button className={isInCart ? "remove":"add"} 
//       // onClick button function 
//       onClick= {handleAddToCartClick}>
//     {/* body of button changes text */}
//         {isInCart ? "Remove From Cart" : "Add to Cart"}</button>
//     </li>
//   );
// }

// export default Item;
