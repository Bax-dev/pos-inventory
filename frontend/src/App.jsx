import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import navigationRoutes from './routes/navigationRoutes';
import './styles/main.css'; 

const App = () => {
  return (
    <Router>
      <Routes>
        {navigationRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>)
};

export default App;

