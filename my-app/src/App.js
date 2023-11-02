import './App.css'
import About from './Routes/About';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Service from './Routes/Service';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
   
    </div>
  );
}

export default App;
