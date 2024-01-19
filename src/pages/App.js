import '../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js'
import Product from './Product.js'
import Contact from "./Contact.js"
import NoPage from './NoPage.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
