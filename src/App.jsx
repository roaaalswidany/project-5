import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer/Footer";

function App() {
  const navItems = [
    { href: "/", text: "Home" },
    { href: "#", text: "About" },
    {
      href: "/signin",
      btn: "Sign In",
    },
    {
      href: "/signup",
      btn: "Sign Up",
    },
  ];

  return (
    <>
      <NavBar navItems={navItems} btn="Sign In" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
