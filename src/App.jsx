import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Post from "./components/pages/Post.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
      <div></div>
    </Router>
  );
}
export default App;
