import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Base from './pages/Base';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Base />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
