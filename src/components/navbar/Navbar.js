import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
function Navbar() {
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalItems = 0;
  cart.forEach((item) => (totalItems += item.quantity));
  return (
    <>
      <div className="Navbar">
        <div className="container nav-container">
          <div className="nav-left">
            <Link to="/">
              <img
                src="https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg?size=626&ext=jpg"
                className="logo"
                alt=""
              />
            </Link>
          </div>
          <div className="nav-center">
            <ul className="link-group">
              {categories?.map((category) => (
                <li className="link-hover" key={category.id}>
                  <Link to={`/options/${category.attributes.Key}`}>
                    {category.attributes.Title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-right">
            <div className="nav-cart">
              <BsCart2
                className="icon"
                onClick={() => setOpenCart(!openCart)}
                style={{fontSize:'5rem'}}
              />
              \
              {totalItems > 0 && (
                <span className="cart-count center">{totalItems}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  );
}

export default Navbar;
