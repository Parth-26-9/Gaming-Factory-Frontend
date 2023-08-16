import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import { TbCoinRupee } from "react-icons/tb";
import { Button, Space } from "antd";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const quantity =
    cart.find((item) => item.key === params.productId)?.quantity || 0;
  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${params.productId}&populate=*`
    );
    if (productResponse.data.data.length > 0) {
      setProduct(productResponse.data.data[0]);
    }
  }
  useEffect(() => {
    setProduct(null);
    fetchData();
  }, [params]);

  if (!product) {
    return <div className="loading">Loading ...</div>;
  }

  const productTitle = product?.attributes.title;

  function handleYoutubeTrailer() {
    if (productTitle === "CALL OF DUTY") {
      return "https://www.youtube.com/embed/aTS9n_m7TW0";
    }
    if (productTitle === "SPIDER MAN") {
      return "https://www.youtube.com/embed/bgqGdIoa52s";
    }
    if (productTitle === "GTA 5") {
      return "https://www.youtube.com/embed/YrtCnL62pB8";
    }
    if (productTitle === "Guardians Of The Galaxy") {
      return "https://www.youtube.com/embed/VdMiY9MEeMk";
    }
    if (productTitle === "Village") {
      return "https://www.youtube.com/embed/tjfTxFzGh3Q";
    }
    if (productTitle === "Gears OF Wars") {
      // return "https://www.youtube.com/embed/st7eMfykiVE";
      return "https://www.youtube.com/embed/hr1G31fMVRI";
    }
    if (productTitle === "FM") {
      return "https://www.youtube.com/embed/em4gv1Ietko";
    }
    if (productTitle === "Batman") {
      return "https://www.youtube.com/embed/muCtJsy-d9w";
    }
    if (productTitle === "A T") {
      return "https://www.youtube.com/embed/VbIc2_FwReE";
    }
    if (productTitle === "Destiny") {
      return "https://www.youtube.com/embed/jv7vqCmt6wY";
    }
    if (productTitle === "BGMI") {
      return "https://www.youtube.com/embed/_rD68RkYE3c";
    }
    if (productTitle === "FIFA 18") {
      return "https://www.youtube.com/embed/l1FJfr_spJQ";
    }
    if (productTitle === "FREE FIRE") {
      return "https://www.youtube.com/embed/oq2Rz2I11l0";
    }
    if (productTitle === "MD 5") {
      return "https://www.youtube.com/embed/st7eMfykiVE";
    }
    if (productTitle === "AS-7") {
      return "https://www.youtube.com/embed/OXP9Rcr7OLQ";
    }
  }

  const finalSRC = handleYoutubeTrailer();

  return (
    <div className="productDetailsContainer">
      <div className="leftSection">
        <img
          src={product?.attributes.Img.data.attributes.url}
          width="80%"
          height="50%"
          alt=""
        />

        <div className="videoSection">
          <h1 style={{ fontSize: "3rem", color: "white" }}>Watch Trailer :</h1>

          <iframe
            width="460"
            height="315"
            src={finalSRC}
            title="Youtube Player"
            frameborder="0"
            allowFullScreen
          />
        </div>
      </div>
      <div className="rightSection">
        <h1>{product?.attributes.title}</h1>
        <div className="price">
          <TbCoinRupee className="icons" />
          <h1 style={{ textDecoration: "Line-through", color: "white" }}>
            5000
          </h1>
          <h1 style={{ color: "white" }}>{product?.attributes.price}</h1>
        </div>
        <Space className="site-button-ghost-wrapper" wrap>
          <Button
            type="primary"
            ghost
            onClick={() => dispatch(addToCart(product))}
          >
            ADD TO CART
          </Button>
          <h1>{quantity}</h1>
          <Button
            type="dashed"
            ghost
            onClick={() => dispatch(removeFromCart(product))}
          >
            REMOVE FROM CART
          </Button>
        </Space>
        <h1 className="belowHeading">ADDITIONAL DETAILS :</h1>
        <ul className="belowUl">Game Type: Campaign + Multiplayer</ul>
        <ul className="belowUl"> Genre: Action / First Person Shooter</ul>
        <ul className="belowUl">Internet Requirement: Yes</ul>
        <ul className="belowUl">PS Plus Requirement: Optional</ul>
        <ul className="belowUl">Metacritic Review Score: 80/100</ul>
      </div>
    </div>
  );
}

export default ProductDetails;
