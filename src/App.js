import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
