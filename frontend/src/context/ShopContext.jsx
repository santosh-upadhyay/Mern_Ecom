import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
let pro = products;
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    // let pro = products;
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')
   useEffect(()=>{
    setProducts(pro)
   })
    const value = {
        products, currency, delivery_fee,
         search, setSearch, showSearch, setShowSearch, 
         cartItems, setCartItems,
        //  addToCart 
        //  getCartCount, updateQuantity, getCartAmount, navigate, backendUrl, 
        // token, setToken
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;