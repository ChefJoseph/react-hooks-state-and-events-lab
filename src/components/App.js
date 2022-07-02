import React, {useState} from "react"
import ShoppingList from "./ShoppingList"
import itemsData from "../data/items"
import Header from "./Header"

function App() {
  const [Darkmode, setDarkmode] = useState(false)
  

  function handleDarkModeClick() {
      setDarkmode(!Darkmode)
  }
  

  return (
    <div className={Darkmode? "App dark": "App"}>
    <Header 
        handle={handleDarkModeClick} 
        dark={Darkmode}
    />
    <ShoppingList 
     items = {itemsData}
     
    />
    </div>
  );
}

export default App;