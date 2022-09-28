import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
