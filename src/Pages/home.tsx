import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Data Strucures and Algorithms Practice in React!</h1>
      <ol>
        <li>
          <a href="/isUnique">Problem 1: Is Unique</a>
        </li>
        <li>
            <a href="/checkPermutation">Problem 2: Check Permutation</a>
        </li>
        <li>
            <a href="/palindromePermutation">Problem 3: Palindrome Permutation</a>
        </li>
      </ol>
    </div>
  );
};

export default Home;