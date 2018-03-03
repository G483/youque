import React from 'react';
import ReactDOM from 'react-dom';

import ShoppingList from "./components/ShoppingList.js"; 

<ShoppingList name="Kemal" />

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<ShoppingList/>, wrapper) : false;

