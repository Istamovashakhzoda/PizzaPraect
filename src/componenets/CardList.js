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
          <img 
           src='https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F2c814f26-9d3c-4b66-ae54-003fe4db2cb4.jpg&w=1920&q=100'
          alt="loader"
          className="loader"/>
         </div>
         :
         <>
         <div className="card-list">
          {
             products.length === 0 ? <p>Don't fount the product</p> :
             products.map(item => {
              return(
                <Card key={item.id} data={item} addcart={addcart}/>
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