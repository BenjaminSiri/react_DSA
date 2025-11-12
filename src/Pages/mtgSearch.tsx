import React, { useState } from 'react';

import { Button } from '@mui/material';

const MTGSearch: React.FC = () => {
    const url = 'https://api.scryfall.com/cards/random';

    const [cardName, setCardName] = useState<string>('');

    const handleClick = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const result = await response.json();
          console.log(result);
          setCardName(result.name);
        } catch (error) {
          console.error(error);
        }
        return;
      }

    return (
        <div>
            <h1>MTG Search</h1>

            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Random Card
            </Button>

            <p>{cardName || 'Click the button'}</p>
        </div>
    )
}

export default MTGSearch;