import React from 'react';
import { TextField, Button, Icon } from '@mui/material';
import { useState } from 'react';

import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Problem1: React.FC = () => {

  const [input, setInput] = useState<string>('');
  const [isUnique, setIsUnique] = useState<boolean | null>(null);
  const [time, setTime] = useState<number>(0);

  function checkIsUnique() {
    let str = input;
    let charSet = new Set();
    for (let i:number = 0; i < str.length; i++){
      if(charSet.has(str[i])){
        setIsUnique(false);
        return;
      } else {
        charSet.add(str[i]);
      }
    }
    setIsUnique(true);
    return;
  }

  function checkIsUniqueSort(){
    let str:string = input;
    let charArray:string[] = str.split('');
    charArray.sort();
    for(let i:number=0; i < charArray.length - 1; i++){
      if (charArray[i] == charArray[i+1]){
        setIsUnique(false);
        return;
      }
    }
    setIsUnique(true);
    return;
  }

  function handleClick() {
    const startTime = performance.now()
    checkIsUniqueSort()
    const endTime = performance.now()
    setTime(endTime-startTime);
  }

  return (
    <div>
      <h1>Problem 1: isUnique</h1>
      
      <TextField
        label="Enter a string"
        variant="outlined"
        fullWidth
        margin="normal" 
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setIsUnique(null);
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Check Uniqueness
      </Button>

      <Icon>
        {isUnique === null ? (
          <BlockOutlinedIcon/>
        ) : isUnique ? (
          <CheckCircleOutlinedIcon color="success" />
        ) : (
          <CancelOutlinedIcon color="error" />
        )}
      </Icon>

      <p>Function took: {time?.toFixed(2) } miliseconds</p>


    </div>
  );
};

export default Problem1;