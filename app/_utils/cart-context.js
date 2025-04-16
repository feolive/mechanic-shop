"use client";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {

  const [items, setItems] = useState([]);
  const [refreshOrders, setRefreshOrders] = useState(false);

  const addItem = async (item) => {
    if(items.length === 0){
      item.quantity = 1;
      setItems([...items, item]);
    }else{
      item.quantity = item.quantity ? item.quantity + 1 : 1;
      updateItem(item);
    }
  };

  const subItem = async (item) => {
    if(item.quantity === 1){
      setItems(items.filter((i) => i.id !== item.id));
    }else{
      item.quantity -= 1;
      updateItem(item);
    }
  };

  const updateItem = async (item) => {
    setItems(items.map((i) => i.cardId === item.cardId ? item : i));
  };

  const clearCart = async () => {
    setItems([]);
  };


  return (
    <CartContext.Provider value={{ items,setItems, addItem, subItem, clearCart, refreshOrders, setRefreshOrders }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
