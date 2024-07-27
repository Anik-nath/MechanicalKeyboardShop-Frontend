import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/footer/Footer";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Checkout from "./Pages/Checkout/Checkout";
import Faq from "./Pages/FAQ/Faq";
import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermConditions from "./Pages/TermConditions/TermConditions";
import Cart from "./Pages/Cart/Cart";


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
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/faq" element={<Faq></Faq>}></Route>
          <Route
            path="/termsconditions"
            element={<TermConditions></TermConditions>}
          ></Route>
          <Route
            path="/privacypolicy"
            element={<PrivacyPolicy></PrivacyPolicy>}
          ></Route>
          <Route
            path="/refundpolicy"
            element={<RefundPolicy></RefundPolicy>}
          ></Route>
          <Route
            path="/product/details/:id"
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
