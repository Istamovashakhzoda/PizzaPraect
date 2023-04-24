import React, {useState, useEffect} from "react";
import CardItem from "./CardItem";

const Cart = ({products, changee}) =>{
  // {Shopping kard savatchning ichi}

  const [classActive, toggleClass] = useState(false);
  const [sum, setSum] = useState(0);

  const toggleButton =() =>{
    toggleClass (!classActive)
  }
   useEffect(() =>{  /*Jami summani hisoblash uchun*/
    let total = 0;
    for(var i = 0;  i< products.length; i++){
      total += products[i].price*products[i].quantity;
    }
    setSum(total)
   },[products])

   const checkout = () =>{
    alert(`Subtotal: $ ${sum.toFixed(2)}`);
   }

  return(
    <>
     <button className="toggle-btn" onClick={toggleButton}>
      Cart
     </button>
     <div className={classActive ? "active" : ""}>
      <div className="shopping-cart">
        <div className="cartContent">
          <div className="cartList">
            {
              products.length === 0
              ?
              <div className="emptyCart">
                <img src="https://collabkart.com/img/empty-cart.gif" className="emptyGif"/>
              </div>
              :
              products.map(product =>{
                return(
                  <>
                  <CardItem
                  key={product.id}
                  product={product}
                  changee={changee}/>
                  </>
                )
              })
            }
          </div>

          <div className="total">
            <div className="info">
              <p className="totalText">Toal</p>
              <p className="totalPrice">UZS:{sum.toFixed(2)}</p>
            </div>
            <button onClick={checkout} classNamepurchaseBtn>Purchase</button>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Cart;