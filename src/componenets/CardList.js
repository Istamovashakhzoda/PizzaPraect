import React, {useState,useEffect} from "react";
import Card from "./Card";

const CardList = ({products,addcart}) =>{
 const [delay, setDelay] = useState(true);

 useEffect(() =>{
  setDelay(true);
  setTimeout(() =>{
    setDelay(false)
  },5000)  //5sekuntga teng
 })


  return(
    <div>
      
    </div>
  )
}

export default CardList;