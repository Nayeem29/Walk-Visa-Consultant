import { Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Home/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Footer from "./Pages/SharedPages/Footer/Footer";
import Header from "./Pages/SharedPages/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/service/:serviceId' element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
