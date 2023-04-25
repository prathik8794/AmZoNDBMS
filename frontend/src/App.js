import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Login } from './components/Authentication/login';
import { Signup } from './components/Authentication/signup';
import { AddItem } from './pages/mainPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AddItem />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
