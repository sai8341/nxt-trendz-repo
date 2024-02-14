import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Home from './Components/Home';
import Products from './Components/Products';
import NotFound from './Components/NotFound';
import Cart from './Components/Cart';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path='/' element={<PrivateRoute element={Home} />} />
        <Route path="/products" element={<PrivateRoute element={Products} />} />
        <Route path="/cart" element={<PrivateRoute element={Cart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
