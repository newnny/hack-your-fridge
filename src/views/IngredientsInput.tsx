import React, { useState } from 'react';
import { getReceipeResponse } from '../api/receipesAPI';
import '../styles/IngredientsInputStyle.css';

const IngredientInput: React.FC = () => {
  const [input, setInput] = useState<string>("")

  const handleGetDishes = async (maxResult: string, ingredient: string) => {
    const receipes = await getReceipeResponse(maxResult, ingredient)
    console.log(receipes)
    console.log(JSON.stringify([input]))
  }

  return (
    <>
      <div className='description-div'>
        <p style={{ color: "#adae59" }}>
          Search receipes with ingredinets in your fridge
        </p>
      </div>
      <div className='action-wrapper'>
        <div className='action-div'>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type='text'
            className='input-field'
          />
        </div>
        <div className='action-div'>
          <button
            className='btn'
            onClick={() => handleGetDishes('30', `${input}`)}
          >
            Get inspiration
          </button>
        </div>
      </div>
    </>
  )
}

export default IngredientInput;