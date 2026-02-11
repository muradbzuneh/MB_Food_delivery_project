import { createContext, useEffect, useState } from "react";
import { menu_list } from "../../assets/assets";
import { assets } from "../../assets/assets";
import { API_URL } from "../../services/api.js";
import axios from "axios";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [token, setToken] = useState(null);

  const fetchFoodList = async () => {
    try {
      const response = await fetch(`${API_URL}/foods/all`);
      if (!response.ok) {
        throw new Error("Failed to fetch food list");
      }
      const data = await response.json();
      setFoodList(data);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  // Check for token in localStorage on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const productPrice = foodList.reduce((total, item) => {
    return total + item.price * (cartItems[item._id] || 0);
  }, 0);

  const deliveryFee = productPrice < 50 ? 0 : 5;
  const totalPrice = (productPrice + deliveryFee).toFixed(2);

  const fetchCart = async () => {
    if (!token) return;

    try {
      const response = await axios.get(`${API_URL}/cart`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const cartData = response.data;
      const cartObject = {};
      cartData.items.forEach(item => {
        cartObject[item.food._id] = item.quantity;
      });

      setCartItems(cartObject);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, [token]);

  const AddtoCart = async (itemId) => {
    // Update local state
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));

    // Sync with backend if token exists
    if (token) {
      try {
        await axios.post(`${API_URL}/cart/add`, 
          { foodId: itemId }, 
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }

    // Save to localStorage
    const updatedCart = {
      ...cartItems,
      [itemId]: (cartItems[itemId] || 0) + 1
    };
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeFromCart = async (itemId) => {
    // Update local state
    setCartItems(prev => {
      const newQuantity = Math.max(0, (prev[itemId] || 0) - 1);
      if (newQuantity === 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });

    // Sync with backend if token exists
    if (token) {
      try {
        await axios.post(`${API_URL}/cart/remove`, 
          { foodId: itemId }, 
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    }

    // Update localStorage
    const currentCart = { ...cartItems };
    if (currentCart[itemId] > 1) {
      currentCart[itemId] -= 1;
    } else {
      delete currentCart[itemId];
    }
    localStorage.setItem("cartItems", JSON.stringify(currentCart));
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  const contextValue = {
    menu_list,
    foodList,
    assets,
    cartItems,
    AddtoCart,
    removeFromCart,
    getCartCount,
    productPrice,
    deliveryFee,
    totalPrice,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;