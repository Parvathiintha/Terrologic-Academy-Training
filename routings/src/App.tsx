import React from "react";
import { BrowserRouter as Router, Routes, Route, Link,useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
import ButtonNavigation from "./Button-Navigation";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id"element={<Post/>} />
        <Route path="/abc" element={<ButtonNavigation />}/>
        
      </Routes>
    </Router>
  );
};

export default App;
