import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="*" element={<Home></Home>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
