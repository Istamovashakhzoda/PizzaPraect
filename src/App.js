import React, {useState, useEffect} from "react";
import Cart from "./componenets/Cart"
import Products from "./componenets/Products"
import logo from "./componenets/logo.png"
function App() {

  const [products, setProducts] = useState({});
  const [cart, setCart] = useState([]);

  const addcart = (item) =>{
    const productList = [...cart];
    if(!productList.includes(item)){
      productList.push(item);
    }
    const index = productList.indexOf(item)
    productList[index].quantity++;
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));

    alert(" Added Pizza", cart);
    console.log(index);
  }

  const changee = (item, e)=>{
    const productList = [...cart];
    const index = productList.indexOf(item);

    if(e === "+"){
      productList[index].quantity++;
    }else{
      if(productList[index].quantity > 1){
        productList[index].quantity--;
      }else{
        productList.splice(index, 1)
      }
    }

    localStorage.setItem("cart", JSON.stringify(productList));
    setCart(productList)
  }
  return (
    <>
      <div className="header">
        <img src= {logo} className="brand"/>
        <Cart products={cart} changee={changee}/>
      </div>
      <Products products={products} addcart={addcart}/>
    </>
  );
}

export default App;
