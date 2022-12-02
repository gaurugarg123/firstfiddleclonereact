import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Careers from "./componants/Careers";
import Contact from "./componants/Contact";
import Brands from "./componants/Brands";
import About from "./componants/About";
import Footer from "./componants/Footer";
import Home from "./componants/Home";
import Navbar from "./componants/Navbar";
import OurTeam from "./componants/OurTeam";
import PressRelease from "./componants/PressRelease";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <>
      <Router>
      <ScrollToTop/>    
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/brands" element={<Brands/>}/>
        <Route exact path="/ourteam" element={<OurTeam/>}/>
        <Route exact path="/pressrelease" element={<PressRelease/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/careers" element={<Careers/>}/>
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
