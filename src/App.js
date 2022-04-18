import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Home/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import NotFound from "./Pages/NotFound/NotFound";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/SharedPages/Footer/Footer";
import Header from "./Pages/SharedPages/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
