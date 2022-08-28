import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './navigation/Header';
import Deaths from './component/Deaths';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Deaths />} />
      </Routes>
    </div>
  );
}

export default App;
