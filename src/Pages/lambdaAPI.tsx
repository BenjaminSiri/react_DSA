import React, {useState} from 'react';

import { Button } from '@mui/material';

interface ApiResponse {
  message: string;
  status?: string;
}

const LambdaAPI: React.FC = () => {
  const url= "https://c8xzrvrgf8.execute-api.us-east-2.amazonaws.com/";

  const [response, setResponse] = useState<string>('');
    
  const handleClick = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result:string = await response.json();
      console.log(result);
      setResponse(result);
    } catch (error) {
      console.error(error);
    }
    return;
  }

  return (
    <div>
        <a href="/">back</a>
        <h1>GET request with AWS Lambda</h1> 

        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Fetch
        </Button>

        <p>{response || 'Waiting for fetch'}</p>

    </div>
  );
};

export default LambdaAPI;