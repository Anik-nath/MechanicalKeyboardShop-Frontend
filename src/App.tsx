import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/footer/Footer";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route
            path="/details"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="*" element={<Home></Home>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
