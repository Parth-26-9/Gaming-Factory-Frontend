import React from "react";
import "./Payment.scss";
import { useNavigate, useParams } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import {useDispatch} from 'react-redux'
import { resetCart } from "../../redux/cartSlice";
import { Button, Space } from "antd";
import { BsFillCartCheckFill } from "react-icons/bs";
function Payment() {
  const params = useParams();
  const navigate =useNavigate()
  const status = params.status;
  const dispatch = useDispatch()
  const infoData = {
    success: {
      message: "Your order has been placed",
      cta: "Shope More",
      icon: <BsFillCartCheckFill />,
    },
    failed: {
      message: "Payment Failed",
      cta: "Try Again",
      icon: <BiErrorCircle/>,
    },
  };
  function handleMyButton()
  {
        navigate('/options/ps-5')
  }
  if(status === 'success')
  {
    dispatch(resetCart)
  }
  return (
    <div className="Payments">
      <div className="icon">{infoData[status].icon}</div>
      <h2 className="message">{infoData[status].message}</h2>
      <button className="myBtn" onClick={handleMyButton}>{infoData[status].cta}</button>
    </div>
  );
}

export default Payment;
