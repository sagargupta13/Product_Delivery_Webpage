

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blogs from './pages/Blogs';




function App() {
  return (
    <div >
      
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      
      <Route path="*" element={<PageNotFound/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

