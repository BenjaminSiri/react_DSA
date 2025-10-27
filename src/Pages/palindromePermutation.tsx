import React, { useState } from 'react';
import { TextField, Button, Icon } from '@mui/material';

import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const PalindromePermutation: React.FC = () => {

    const [input, setInput] = useState<string>('');
    const [time, setTime] = useState<number>(0);
    const [isPalindromePermutation, setIsPalindromePermutation] = useState<boolean | null>(null);

    function handleClick() {
        const startTime: number = performance.now();
        setIsPalindromePermutation(checkPalindomePermutation(input));
        const endTime: number = performance.now();
        setTime(endTime - startTime);
    }


    function checkPalindomePermutation(str: string) {
        let charCount = new Map<string, number>();

        for(const char of str){
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }

        let oddCount:number = 0;

        charCount.forEach((value:number, key:string) => {
            if(value % 2 === 1){
                oddCount++;
            }
        })

        switch(oddCount){
            case (0):
                if(str.length % 2 === 0){
                    return true;
                }
                return false;
            case (1):
                if(str.length % 2 === 1){
                    return true;
                }
                return false;
            default:
                return false;
        }
    }


    return (
      <div>
        <a href="/">back</a>
        <h1>Problem 3: palindromePermutation</h1>

        <TextField 
            label="Enter String"
            variant="outlined"
            margin="normal" 
            value={input}
            onChange={(e) => {
                setIsPalindromePermutation(null);
                setInput(e.target.value)
            }}
        />

        <br/>

        <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
        >
            Check Palindrome Permutation
        </Button>

        <Icon>
            {isPalindromePermutation === null ? (
            <BlockOutlinedIcon/>
            ) : isPalindromePermutation ? (
            <CheckCircleOutlinedIcon color="success" />
            ) : (
            <CancelOutlinedIcon color="error" />
            )}
        </Icon>

        <p>Function took: {time?.toFixed(2) } miliseconds</p>

      </div>
    );
  };
  
  export default PalindromePermutation;