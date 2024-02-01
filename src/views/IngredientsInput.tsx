import React, { useState } from 'react';
import { fetchRecipes } from '../Store/modules/recipesSlice';
import '../styles/IngredientsInputStyle.css';
import { useAppDispatch } from '../Store/reduxHooks';
import { Chip, Stack } from '@mui/material';

const IngredientInput: React.FC = () => {
  const [input, setInput] = useState<string>("")
  const dispatch = useAppDispatch();

  const handleClickChip = (option: string) => {
    setInput(input + ", " + option)
  }

  const handleDeleteChip = () => {
    console.log("delete")
  }

  const handleGetRecipes = async (ingredient: string) => {
    await dispatch(fetchRecipes(ingredient));
  }

  const options: string[] = ["Vegan", "Vegetarian", "Non-dairy", "Low-sugar", "Low-fat", "Low-calories", "Easy", "Dinner", "Lunch", "Breakfast"]

  return (
    <>
      <div className='description-div'>
        <p className='search-text'>
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

          <Stack direction="row" spacing={1}>
            {options.map(option => 
            <Chip
              label={option}
              onClick={() => handleClickChip(option)}
              //onDelete={handleDeleteChip}
            />)}
          </Stack>
        </div>
        <div className='action-div'>
          <button
            className='btn'
            type='submit'
            onClick={() => handleGetRecipes(`${input}`)}
          >
            Get inspiration
          </button>
        </div>
      </div>
    </>
  )
}

export default IngredientInput;