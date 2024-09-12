import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./assets/component/Home";
import ContactPage from "./assets/page/ContactPage";
import { SignIn, useUser } from "@clerk/clerk-react";
import Admin from "./assets/page/Admin";
import { useEffect } from "react";
import DashBoard from "./assets/page/DashBoard";
import Product from "./assets/page/Product";
import Manage from "./assets/page/Manage";
import About from "./assets/page/About";

function App() {
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    
    if (
      isSignedIn &&
      user?.publicMetadata?.role === "admin" &&
      (window.location.pathname === "/" || window.location.pathname === "/admin")
    ) {
      navigate("/admin");
    }
  }, [isSignedIn, user, navigate]);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/manage" element={<Manage />} />
        {/* <Route path="signin" element={<SignIn />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
