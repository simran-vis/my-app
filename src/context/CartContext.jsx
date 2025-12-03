import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);

    setMessage(`${item.name} added to cart!`);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, message }}>
      {children}

      {message && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          {message}
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
