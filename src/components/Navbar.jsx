import logo from "/src/assets/logo.svg";
import avatar from "/src/assets/image-avatar.png";
import iconMenu from "/src/assets/icon-menu.svg";
import iconClose from "/src/assets/icon-close.svg";
import CartContext from "../context/CartContext";
import iconDelete from "/src/assets/icon-delete.svg";

import { useContext, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const {
    cartProducts,
    setCartProducts,
    cartValues,
    setCartValues,
    totalValue,
    setTotalValue,
  } = useContext(CartContext);

  const handleProductDelete = (product) => {
    const newCartProducts = [...cartProducts];
    newCartProducts.splice(
      newCartProducts.find((cartProduct) => cartProduct.id === product.id),
      1
    );
    setCartProducts(newCartProducts);
    setTotalValue((prev) => prev - cartValues[product.id]);
    const newCartValues = { ...cartValues };
    delete newCartValues[product.id];
    setCartValues(newCartValues);
  };

  return (
    <nav className="bg-white flex justify-between items-center h-16 sm:h-20 p-4 sm:border-b-2 border-slate-100">
      <div className="flex gap-4">
        <button
          className="w-5 h-5 absolute z-50 sm:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <img
            id="iconMenu"
            src={openMenu ? iconClose : iconMenu}
            alt="menu"
            className="h-5 w-5"
          />
        </button>
        <img src={logo} alt="logo" className="mr-4 max-h-5 ml-8 sm:ml-0" />
        <div
          id="mobile-menu-wrapper"
          className={` ${
            openMenu
              ? "bg-black/20 w-screen h-screen fixed top-0 left-0 z-20"
              : ""
          }`}
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          <ul
            id="mobile-menu"
            className={`sm:flex sm:gap-4 ${openMenu ? "active" : ""} `}
            onClick={(e) => e.stopPropagation()}
          >
            <li className="nav-anim">
              <a href="#">Collections</a>
            </li>
            <li className="nav-anim">
              <a href="#">Men</a>
            </li>
            <li className="nav-anim">
              <a href="#">Women</a>
            </li>
            <li className="nav-anim">
              <a href="#">About</a>
            </li>
            <li className="nav-anim">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <ul className="flex gap-4 justify-end items-center h-full">
        {/* Cart */}
        <li
          className={`cartButton cursor-pointer relative`}
          onClick={() => setOpenCart((prev) => !prev)}
        >
          <div
            className={
              totalValue
                ? "absolute top-[-4px] right-[-4px] w-4/5 h-3 bg-orange-400 text-white text-[8px] text-center rounded-lg"
                : "hidden"
            }
          >
            {totalValue}
          </div>

          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
        </li>

        <div
          className={
            openCart
              ? "absolute top-20 sm:top-16 inset-x-2 sm:inset-x-auto sm:w-80 z-10 bg-white rounded-lg shadow-lg shadow-slate-500/50"
              : "hidden"
          }
        >
          <p className="text-black p-4 font-bold border-b ">Cart</p>
          <section
            className={
              cartProducts.length
                ? "block p-6"
                : "grid place-content-center min-h-24"
            }
          >
            {cartProducts.map((product) => (
              <div
                className="flex items-center justify-between gap-2 last-of-type: mb-4"
                key={product.imgUrl}
              >
                <div className="max-h-12 max-w-12">
                  <img
                    src={product.imgUrl}
                    className="object-cover rounded-md"
                  />
                </div>

                <div>
                  <p>{product.name}</p>
                  <p>
                    {product.newPrice} x {cartValues[product.id]}
                    <span className="text-black font-bold">{` ${product.newPrice.at(
                      0
                    )}${parseFloat(
                      product.newPrice.slice(1) * cartValues[product.id]
                    ).toFixed(2)}`}</span>
                  </p>
                </div>

                <button
                  aria-description="Delete"
                  onClick={() => handleProductDelete(product)}
                >
                  <img src={iconDelete} alt="Delete" />
                </button>
              </div>
            ))}

            {cartProducts.length ? (
              <button className="w-full h-12 text-black font-bold bg-orange-400 rounded-lg mb-2">
                Checkout
              </button>
            ) : (
              <span className="font-bold">Your cart is empty.</span>
            )}
          </section>
        </div>

        {/* Avatar */}
        <li className="cursor-pointer h-full">
          <div className="h-full hover:outline hover:outline-2 hover:outline-orange-400 rounded-full">
            <img src={avatar} alt="avatar" className="max-h-full" />
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
