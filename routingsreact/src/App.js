// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//import './App.css';
import Home from './Home';
import About from './About';
import Post from './Post';

import ButtonNavigation from './ButtonNavigation';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id"element={<Post />}/>
        <Route path="/navigation" element={<ButtonNavigation/>}/>
      </Routes>
    </Router>
  );
}


    



export default App;
