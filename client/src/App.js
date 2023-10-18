
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./pages/signIn/signIn";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;