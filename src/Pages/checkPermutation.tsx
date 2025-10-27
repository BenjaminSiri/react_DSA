import React, {useState} from 'react';
import {TextField, Button, Icon} from '@mui/material';

import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const CheckPermutation: React.FC = () => {
    const [string1, setString1] = useState<string>('');
    const [string2, setString2] = useState<string>('');
    const [isPermutation, setIsPermutation] = useState<boolean | null>(null);
    const [time, setTime] = useState<number>(0);


    let handleClick = () => {
        const startTime = performance.now();
        setIsPermutation(checkPermutation(string1, string2));
        const endTime = performance.now();
        setTime(endTime-startTime);
    }

    function checkPermutation(str1:string, str2:string) {
        if(str1.length != str2.length){
            return false;
        }
        let char1Array: string[]  = str1.split('');
        let char2Array: string[]  = str2.split('');
        char1Array.sort();
        char2Array.sort();
        for (let i:number = 0; i < char1Array.length; i++){
            if(char1Array[i] != char2Array[i]){
                return false;
            }
        }
        return true;
    }

    return (
      <div>
        <a href="/">back</a>
        <h1>Problem 2: checkPermutation</h1>

        <TextField 
            label="Enter String 1"
            variant="outlined"
            margin="normal" 
            value={string1}
            onChange={(e) => {
                setString1(e.target.value)
                setIsPermutation(null);
            }}
        />
        <TextField 
            label="Enter String 2"
            variant="outlined"
            margin="normal" 
            value={string2}
            onChange={(e) => {
                setString2(e.target.value)
                setIsPermutation(null);
            }}
        />
        <br/>
        <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
        >
            Check Permutation
        </Button>

        <Icon>
            {isPermutation === null ? (
            <BlockOutlinedIcon/>
            ) : isPermutation ? (
            <CheckCircleOutlinedIcon color="success" />
            ) : (
            <CancelOutlinedIcon color="error" />
            )}
        </Icon>

      <p>Function took: {time?.toFixed(2) } miliseconds</p>

      </div>
      
    );
  };
  
  export default CheckPermutation;