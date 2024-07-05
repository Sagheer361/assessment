import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/SignUp1';
import Login from './Pages/Login1';
import DataDisplay from './Pages/DataDisplay';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<DataDisplay />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
