import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import IsUnique from './Pages/isUnique';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/isUnique" element={<IsUnique />} />
      </Routes>
    </>
  );
}

export default App;
