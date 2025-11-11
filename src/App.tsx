import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/home';
import IsUnique from './Pages/isUnique';
import CheckPermutation from './Pages/checkPermutation';
import PalindromePermutation from './Pages/palindromePermutation';
import RemoveDups from './Pages/removeDups'
import LambdaAPI from './Pages/lambdaAPI';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/isUnique" element={<IsUnique />} />
        <Route path="/checkPermutation" element={<CheckPermutation />} />
        <Route path="/palindromePermutation" element={<PalindromePermutation />} />
        <Route path="/removeDups" element={<RemoveDups />} />
        <Route path="/lambdaAPI" element={<LambdaAPI />} />
      </Routes>
    </>
  );
}

export default App;
