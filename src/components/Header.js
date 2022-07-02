import React from "react";

function Header({ handle, dark }) {
  return (
    <header>
      <h2>Shopify</h2>
      <button onClick={handle} >
        {dark ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;