import React from "react";
import { Image } from "antd";
import { TbCoinRupee } from "react-icons/tb";
import "./MyCard.scss";
import { useNavigate } from "react-router-dom";
function MyCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="cardContainer">
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        <Image
          width={200}
          src={product?.attributes.Img.data.attributes.url}
          alt={product?.attributes.title}
        />
      </Image.PreviewGroup>
      <h1
        style={{ color: "white" }}
        onClick={() => navigate(`/products/${product?.attributes.key}`)}
      >
        {product?.attributes.title}
      </h1>
      <div className="price">
        <TbCoinRupee className="icons" />
        <h1 style={{ textDecoration: "Line-through", color: "white" }}>5000</h1>
        <h1 style={{ color: "white" }}>{product?.attributes.price}</h1>
      </div>
    </div>
  );
}

export default MyCard;
