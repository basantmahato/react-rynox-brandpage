import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Featured from './components/featured'
import Footer from './components/footer'
import About from './components/about'
import Login from './components/login'
import Services from './components/services'
import Contact from './components/contact'
import Signup from './components/signup'
import ResetPassword from './components/resetPassword'
import Cart from './components/cart'
import { CartProvider } from './components/cartContext'



function App() {
  

  return (
    <Router>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
      

      </Routes>
      <Footer />
      </CartProvider>
    </Router>
  );
}


export default App;
