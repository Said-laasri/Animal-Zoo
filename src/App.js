import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './navigation/Header';
import Animals from './component/Animals';
import MoreAnimalInfo from './component/MoreAnimalInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/more/:moreId" element={<MoreAnimalInfo />} />
        <Route path="/" element={<Animals />} />
      </Routes>
    </div>
  );
}

export default App;
//
