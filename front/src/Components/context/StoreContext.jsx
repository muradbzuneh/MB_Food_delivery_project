import { createContext, useState} from "react";
import { food_list, menu_list } from "../../assets/assets"; 
import { assets } from "../../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props)=>{
const [cartItems, setCartItems] = useState ({});

const productPrice = food_list.reduce((total, item) => {
                return total + item.price * (cartItems[item._id] || 0);
              }, 0).toFixed(2);
  const DeliveryFee =  (food_list.reduce((total, item) => {
                return total + item.price * (cartItems[item._id] || 0);
              }, 0).toFixed(2) <50 ? 0 : 5.00).toFixed(2); 
  const TotalPrice = (Number(DeliveryFee) + Number(productPrice)).toFixed(2);

 

const AddtoCart = (itemId)=>{
  if (cartItems[itemId]) {
    setCartItems({
      ...cartItems,
      [itemId]: cartItems[itemId] + 1
    });
  } else {
    setCartItems({
      ...cartItems,
      [itemId]: 1
    });
  }
}
 const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] -1
    }));
  };
    const getCartCount = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  const contextValue ={
  menu_list,
  food_list,
  assets,
  cartItems,
  AddtoCart,
 removeFromCart,
 getCartCount,
  productPrice,
  DeliveryFee,
  TotalPrice
  }

  return(
    <StoreContext.Provider value={contextValue}>
   {props.children}
    </StoreContext.Provider>
  )
}
export default StoreContextProvider 