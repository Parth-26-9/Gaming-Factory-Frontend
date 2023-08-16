import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { Image } from "antd";
import { TbCoinRupee } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import MyCard from "../../assets/MyCard";
import Category from "../category/Category";
import { useSelector } from "react-redux";
function Footer() {
  const [topProducts, setTopProducts] = useState(null);
  const categories = useSelector((state) => state.categoryReducer.categories);
  async function fetchData() {
    const topProductsResponse = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true&populate=Img"
    );
    setTopProducts(topProductsResponse.data.data);
  }

  useEffect(() => {
    fetchData();
  });
  const navigate = useNavigate();
  return (
    <div className="containerFooter">
      <div className="bestSeller">
        <h1 className="heading" style={{ color: "white" }}>
          Our Top Picks:
        </h1>

        <div className="best-seller-section">
          {topProducts?.map(product => <MyCard key={product.id} product={product} />)}
        </div>
      </div>


      <div className="lastFooter">
        <div className="lastFooterLeftSection">
          <img
            src="https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg?size=626&ext=jpg"
            width="10%"
            height="10%"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <h1 className="styleLastSectionHeading">Legal & Privacy</h1>
          <ul className="styleLastSectionUL">
            Terms and Condition
          </ul>
          <ul className="styleLastSectionUL">
            Cancellation & Refund Policy
          </ul>
          <ul className="styleLastSectionUL">Trade In Policy</ul>
          <ul className="styleLastSectionUL">Shopping Policy</ul>
        </div>
        <div className="lastFooterRightSection">
          <h1 className="styleLastSectionHeading">Need Help</h1>
          <ul className="styleLastSectionUL">FAQs</ul>
          <ul className="styleLastSectionUL">My Account</ul>
          <ul className="styleLastSectionUL">My Orders</ul>
          <ul className="styleLastSectionUL">
            GameNation Wallet
          </ul>
        </div>

        <div className="paymentSection">
          <img
            src="https://gamenation.in/assets/imgs/footer-icons/phonepe.png"
            width="35%"
            height="25%"
            alt=""
          />
          <img
            src="https://gamenation.in/assets/imgs/footer-icons/paytm.png"
            width="35%"
            height="25%"
            alt=""
          />
          <img
            src="https://gamenation.in/assets/imgs/footer-icons/gpay.png"
            width="35%"
            height="25%"
            alt=""
          />
          <img
            src="https://gamenation.in/assets/imgs/footer-icons/mastercard.png"
            width="35%"
            height="25%"
            alt=""
          />
          <img
            src="https://gamenation.in/assets/imgs/footer-icons/visa.png"
            width="35%"
            height="25%"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
