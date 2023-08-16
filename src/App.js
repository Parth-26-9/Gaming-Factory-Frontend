import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Categories from "./pages/categories/Categories";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Footer from "./components/footer/Footer";
import NavBarCategories from "./pages/NavBarCategories/NavBarCategories";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";
import Payment from "./components/payments/Payment";
function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchCategories())
  },[])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={[<Categories />, <Footer />]} />
        <Route path="/category/:categoryId?" element={<Categories />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/options/:optionsId?" element={<NavBarCategories />} />
        <Route path="/payments/:status" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
