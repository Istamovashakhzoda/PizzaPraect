import React, {useState, useEffect} from "react";
import Products from "./Products";


const CardItem = ({ Products, changee}) =>{
  return(
    <div className="cartItem">
   <img src={Products.url} alt = "cartItem" className="cartItemimg" />
   <div className="carMain">
    <div>
      <p>{Products.title}</p>
      <span>UZS{Products.price}</span>
    </div>
    <div>
      <p>Число:<span>{Products.quantity}</span></p>
      <div>
        <button className="quantityBTN" onClick={() => changee(Products, "-")}>-</button>
        <button className="quantityBTN" onClick={() => changee(Products, "+")}>+</button>
      </div>
    </div>
   </div>
    </div>
  )
}

export default CardItem;