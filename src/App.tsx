import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/home';
import IsUnique from './Pages/isUnique';
import CheckPermutation from './Pages/checkPermutation';
import PalindromePermutation from './Pages/palindromePermutation';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/isUnique" element={<IsUnique />} />
        <Route path="/checkPermutation" element={<CheckPermutation />} />
        <Route path="/palindromePermutation" element={<PalindromePermutation />} />
      </Routes>
    </>
  );
}

export default App;
