import React from "react";
import "./Cartitem.scss";
import { TbCoinRupee } from "react-icons/tb";
import { Button, Space } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
function Cartitem({cart}) {
  const dispatch = useDispatch();
  return (
    <div className="cartItemContainer">
      <div className="leftImgLogo">
        <img
          src={cart?.Img}
          width="70%"
          height="70%"
          alt=""
        />
      </div>
      <div className="rightCartItems">
        <Button className="closeBtn">
          <h1>x</h1>
        </Button>
        <h1>{cart.Title}</h1>
        <h2>
          <TbCoinRupee /> {cart.price}
        </h2>
        <div className="inc_dec_section">
          <Button type="primary"  onClick={() => dispatch(removeFromCart(cart))}>-</Button>
          <h1>{cart.quantity}</h1>
          <Button type="primary"  onClick={() => dispatch(addToCart(cart))}>+</Button>
        </div>
        <h3 className="subTotal">
          SubTotal :
          <TbCoinRupee /> {cart.quantity * cart.price}
        </h3>
      </div>
    </div>
  );
}

export default Cartitem;
