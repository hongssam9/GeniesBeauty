import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/NavbarTop.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx"
import Policy from "./components/Policy.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Policy" element={<Policy />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
