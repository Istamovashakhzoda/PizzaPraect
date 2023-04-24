import React from "react";
import shoppingCart from "./card.png"

const Card = ({data, addcard}) =>{
  return(
    <div className="card">
    <div className="cardHeader">
      <img src={data.url} title={data.title} className="card-image" alt="cardImage" />
    </div>
    <div className="cardBody">
      <h3 className="cardTitle">{data.title}</h3>
      <p className="cardDesc">{data.desc}</p>
      <p className="cardPrice"><span>{data.price} Sum</span></p>
      <button className="add-to-card" onClick={() => addcard (data)}>
      <img src={shoppingCart} className="cartIcon"/>
      Заказать
      </button>
    </div>
    </div>
  )
}

export default Card