import pizza from "../pizza.json"
// import Products from "./src/componenets/Products";

export default function filterList(arr, method) {
  if(method == null) return pizza;
  else{
    return pizza.filter(products =>{
      const sizeArray = products.size.split("");
      if(arr.length >0) {
        if(sizeArray.some(r => arr.indexOf(r) >=0)){
          return products;
        }
      }else{
        return pizza;
      }
    })
  }
}