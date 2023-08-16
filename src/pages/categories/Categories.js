import React from "react";
import "./Categories.scss";
import { Carousel } from "antd";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
const contentStyle = {
  // height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
function Categories() {
  const navigate = useNavigate();
  return (
    <div className="categoriesContainer">
      <div className="carouselHandler">
        <Carousel autoplay>
          <div>
            <img
              src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/AdAsset_78"
              width="100%"
              height="100%"
              style={contentStyle}
              alt=""
            />
          </div>
          <div>
            <img
              src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/AdAsset_79"
              width="100%"
              height="100%"
              style={contentStyle}
              alt=""
            />
          </div>
          <div>
            <img
              src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/AdAsset_80"
              width="100%"
              height="100%"
              style={contentStyle}
              alt=""
            />
          </div>
          <div>
            <img
              src="https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/AdAsset_81"
              width="100%"
              height="100%"
              style={contentStyle}
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <Button onClick={()=>navigate('/options')} className="myExploreButton" type="primary" ghost>
        Explore More !
      </Button>
    </div>
  );
}

export default Categories;
