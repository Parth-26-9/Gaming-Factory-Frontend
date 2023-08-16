import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import { TbCoinRupee } from "react-icons/tb";
import { Button, Space } from "antd";
import Cartitem from "../cartItem/Cartitem";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function Cart({ onClose }) {
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.quantity * item.price));
  const isCartEmpty = cart.length === 0;

  async function handleCheckout() {
    try {
      const response = await axiosClient.post("/orders", {
        products: cart,
      });

      const stripe = await loadStripe(
        `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
      );
      const data = await stripe.redirectToCheckout({
        sessionId: response.data.stripeId,
      });

      console.log("stripe data", data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
          <h1>Shopping Cart</h1>
          <Button type="primary" className="closeBtn" onClick={onClose}>
            <AiOutlineClose />
            Close
          </Button>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <Cartitem key={item.key} cart={item} />
          ))}
        </div>
        {cart.length === 0 ? (
          <div className="empty-cart-info" id="emptyCart">
            <div className="icon">
              <AiOutlineShoppingCart />
            </div>
            <h3>Cart is Empty</h3>
          </div>
        ) : (
          <div className="checkout-info">
            <div className="total-amount">
              <h1 className="total-message">Total :</h1>
              <h1 className="total-value">
                <TbCoinRupee />
                {totalAmount}
              </h1>
            </div>
            <Button
              type="primary"
              className="checkout"
              onClick={handleCheckout}
              sandbox="allow-top-navigation"
            >
              CHECKOUT NOW
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
