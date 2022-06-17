import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserSignUp from './Components/UserSignUp';
import UserLoginPage from './Components/UserLoginPage'
import AdminLogin from './Components/AdminLogin';
import HomePage from './Pages/HomePage';
<<<<<<< HEAD
import Cart from './Pages/Cart';
=======
>>>>>>> 8ea0569eccbbb18125c69bc6957533c865416a87

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


  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage cart={ cart} handleAddToCart={handleAddToCart}/>} exact/>
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signin" element={<UserLoginPage />} />
        <Route path="/admin_page" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart} cart={ cart}/>}/>
=======
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/signup" element={<UserSignUp/>} />
        <Route path="/signin" element={<UserLoginPage/>} />
        <Route path="/admin" element={<AdminLogin />} />

>>>>>>> 8ea0569eccbbb18125c69bc6957533c865416a87
      </Routes>

    </Router>
  );
}

export default App;