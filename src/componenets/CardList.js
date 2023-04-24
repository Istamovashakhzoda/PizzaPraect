import React, {useState,useEffect} from "react";
import Card from "./Card";

const CardList = ({products,addcart}) =>{
 const [delay, setDelay] = useState(true);

 useEffect(() =>{
  setDelay(true);
  setTimeout(() =>{
    setDelay(false)
  },5000)  //5sekuntga teng
 },[products])


  return(
    <>
      {
         delay ? < div className="loader">
          <img src="https://pandagif.com/gifs/ysjA8HY1lA.gif"
          alt="loader"
          className="loader"/>
         </div>
         :
         <>
         <div className="card-list">
          {
             products.length === 0 ? <p>Don't fount the product</p>:
             products.map(item => {
              return(
                <Card key={item.id} data={data} addcart={addcart}/>
              )
             })
          }
         </div>
         </>
      }
    </>
  )
}

export default CardList;