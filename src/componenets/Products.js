import React from "react";
import CardList from "./CardList";
const Products = ({products, addcart}) =>{
  return(
    <div className="products">
          <h3 className="themetext">Pizza</h3>
          <CardList products={products} addcart = {addcart} />
    </div>
  )
}

export default Products;