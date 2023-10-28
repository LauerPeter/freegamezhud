
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./pages/signIn/signIn";
import Home from "./pages/home/home"
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;