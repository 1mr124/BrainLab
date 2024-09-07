import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import FastReadPage from './components/FastReadPage'; // Import the FastReadPage component
import FastReadEx01 from './components/FastReadEx01'; // Import the FastReadPage component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/fastRead" element={<FastReadPage />} />
          <Route path="/FastReadEx01" element={<FastReadEx01 />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
