import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserSignUp from './Components/UserSignUp';
import UserLoginPage from './Components/UserLoginPage'
import AdminLogin from './Components/AdminLogin';
import AdminPage from './Components/AdminPage';
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart';

function App() {
  const [cart,setCart] =useState([]);
  
  //Handle Add to Cart
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);

      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

//Handle Remove from cart
const handleRemoveFromCart = (id) => {
  setCart((prev) => {
    return prev.reduce((cal, item) => {
      if (item.id === id) {
        if (item.amount === 1) return cal;

        return [...cal, { ...item, amount: item.amount - 1 }];
      }

      return [...cal, { ...item }];
    }, []);
  });
};
 //handle delete from cart
const handleDeleteFromCart = (id) =>{
   setCart(cart.filter((product => product.id !== id) ))
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage cart={ cart} handleAddToCart={handleAddToCart}/>} exact/>
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signin" element={<UserLoginPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin_page" element={<AdminPage />} />
        <Route path="/cart" element={<Cart handleDeleteFromCart={handleDeleteFromCart} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart} cart={ cart}/>}/>
      </Routes>

    </Router>
  );
}

export default App;