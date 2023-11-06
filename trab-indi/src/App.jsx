import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
