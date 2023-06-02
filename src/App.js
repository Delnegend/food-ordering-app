import * as React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from './Homepage/Components/ProfilePage';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    </Router>
  );
}

export default App