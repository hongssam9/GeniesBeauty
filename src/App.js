import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home";
import Navbar from "./components/NavbarTop.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
