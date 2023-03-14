import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/home/Home";
import About from "./Component/about/About";
import Blog from "./Component/Blog/Blog";
import Services from "./Component/service/Services";
import Signup from "./Component/signup/Signup";
import Register from "./Component/signup/Register";
import Mocktest from "./mocktest/Mocktest";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Home />
      <About />
      <Blog />
      <Services />
      <Signup />
      <Register />
      <Mocktest/>
    </>
  );
}

export default App;
