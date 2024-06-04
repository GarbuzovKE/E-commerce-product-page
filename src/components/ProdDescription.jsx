import minus from "/src/assets/icon-minus.svg";
import plus from "/src/assets/icon-plus.svg";
import iconCart from "/src/assets/icon-cart.svg";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";

const ProdDescription = ({ productInfo }) => {
  let {
    id,
    company,
    name,
    description,
    oldPrice,
    newPrice,
    discount,
    productImg: imgUrl,
  } = productInfo;

  const {
    cartProducts,
    setCartProducts,
    cartValues,
    setCartValues,
    totalValue,
    setTotalValue,
  } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = (obj, amount) => {
    const id = obj.id;
    if (cartValues[id]) {
      setCartValues((prev) => ({ ...prev, [id]: prev[id] + amount }));
    } else {
      setCartProducts((prev) => [...prev, obj]);
      setCartValues((prev) => ({ ...prev, [id]: amount }));
    }
    setTotalValue((prev) => prev + amount);
  };

  const handleRemoveItem = () => {
    if (!itemCount) return;
    setItemCount((prev) => prev - 1);
  };

  const handleAddItem = () => {
    setItemCount((prev) => prev + 1);
  };

  return (
    <div
      id="description"
      className="p-6 flex flex-wrap flex-col place-content-center sm:w-2/5 sm:p-12"
    >
      <div className="wrapper">
        <h2 className="text-xs sm:text-sm uppercase font-bold">{company}</h2>
        <h1 className="text-2xl sm:text-3xl font-bold text-black pt-2 sm:pt-4 pb-4 sm:pb-8">
          {name}
        </h1>
        <p className="pb-4">{description}</p>
        <div
          id="price"
          className="pb-4 flex sm:block justify-between items-center"
        >
          <div className="flex w-1/2 sm:w-2/5 justify-between items-center">
            <span className="font-bold text-black text-2xl">{newPrice}</span>
            <div className="text-sm w-10 h-6 bg-black text-white flex flex-wrap place-content-center rounded-md font-bold">
              {discount}
            </div>
          </div>
          <span className="text-sm crossed line-through font-bold">
            {oldPrice}
          </span>
        </div>

        <div id="buyProduct" className="block  sm:flex sm:gap-4">
          <div className="flex justify-between bg-slate-100 items-center rounded-lg mb-4 h-12 sm:w-1/3">
            <button
              className="w-10 h-10 grid place-content-center"
              aria-description="Remove item"
              onClick={() => handleRemoveItem()}
            >
              <img src={minus} alt="remove item icon" />
            </button>
            <span className="text-black font-bold">{itemCount}</span>
            <button
              className="w-10 h-10 grid place-content-center"
              aria-description="Add item"
              onClick={() => handleAddItem()}
            >
              <img src={plus} alt="add item icon" />
            </button>
          </div>
          <button
            className="flex w-full bg-orange-400  h-12 flex-wrap place-content-center gap-4 rounded-lg sm:w-2/3 "
            onClick={() => itemCount && handleAddToCart(productInfo, itemCount)}
            aria-description="Add to cart"
          >
            <img className="text-black" src={iconCart} alt="icon cart" />
            <span className="text-black font-bold">Add to cart</span>
          </button>
          {/*           <button
            onClick={() => {
              console.log(cartProducts);
              console.log(cartValues);
              console.log(totalValue);
            }}
          >
            Show cart
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default ProdDescription;
