import React, { useEffect, useState } from "react";
import "./NavBarCategories.scss";
import MyCard from "../../assets/MyCard";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";
function NavBarCategories() {
  const colorStyle = {
    color: "white",
  };
  const params = useParams();
  const [categoryId, setCategoryId] = useState("");
  const categories = useSelector((state) => state.categoryReducer.categories);
  
  const [products, setProducts] = useState([]);
  const sortOptions = [
    {
      value: "price - Low To High",
      sort: "price",
    },
    {
      value: "Newest first",
      sort: "createdAt",
    },
  ];
  const[sortBy,setSortBy]=useState(sortOptions[0].sort)
  async function fetchProducts() {
    // const response = await axiosClient.get(`/products?populate=Img&filters[category][Key][$eq]=${params.categoryId}`)
    const response = await axiosClient.get(
      `products?populate=Img&filters[category][Key][$eq]=${window.location.pathname
        .toString()
        .slice(9)}&sort=${sortBy}`
    );
    // console.log(response.data.data[10].attributes.category.data.attributes.Key)
    setProducts(response.data.data);
  }
  useEffect(() => {
    setCategoryId(params.categoryId);
    fetchProducts();
  }, [params,sortBy]);
  function updateCategory(e) {
    navigate(`/options/${e.target.value}`);
  }
  function handleSortChange(e)
  {
    const sortKey = e.target.value
    setSortBy(sortKey)
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="navbarCategories">
        <div className="leftSectionCategories">
          <h1>
            {" "}
            Select Below Category:
          </h1>
          <div className="category-filter">
            {categories.map((item) => (
              <div key={item.id} className="radio-Section">
                <input
                  name="category"
                  type="radio"
                  className="myInput"
                  value={item.attributes.Key}
                  id={item.id}
                  onChange={updateCategory}
                  checked={item.attributes.Key === categoryId}
                />
                <label htmlFor={item.id}>{item.attributes.Title}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="rightSectionCategories">
          <h1 style={colorStyle}>Sort By :-</h1>
          <br />
          <select name="sort-by" id="sort-by" onChange={handleSortChange}>
            {sortOptions.map((item) => (
              <option value={item.sort}>{item.value}</option>
            ))}
            {/* <option value="relavance">Relavance</option>
            <option value="newest-first">Newest First</option>
            <option value="price">Price - Low To High</option> */}
          </select>
        </div>
      <div className="gameListContainer">
        <div className="gameLists">
          {products.map((product) => (
            <MyCard key={product.id} product={product} />
          ))}
        </div>
      </div>
  </div>
    </>
  );
}

export default NavBarCategories;
