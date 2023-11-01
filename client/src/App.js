
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./pages/signIn/signIn";
import GameList from "./pages/games/gameList";
import Home from "./pages/home/home"
import Header from './layout/Header';
import Footer from './layout/Footer';
import GameDescription from "./pages/games/gameDescrip";
import { AuthProvider } from './context/authContext';
import UserProfile from "./pages/user/user"

function App() {
  return (
    <Router>
      <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/gameList' element={<GameList />} />
          <Route path="/game/:id" element={<GameDescription />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;