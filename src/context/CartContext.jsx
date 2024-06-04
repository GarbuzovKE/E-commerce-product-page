import { createContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartValues, setCartValues] = useState({});
  const [totalValue, setTotalValue] = useState(0);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        cartValues,
        setCartValues,
        totalValue,
        setTotalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
