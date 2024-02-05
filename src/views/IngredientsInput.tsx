import React, { SyntheticEvent, useState } from 'react';
import { fetchRecipes } from '../Store/api/fetchRecipes';
import '../styles/IngredientsInputStyle.css';
import { useAppDispatch } from '../Store/reduxHooks';
import { Chip, Stack } from '@mui/material';

const IngredientInput: React.FC = () => {
  const [input, setInput] = useState<string>("")
  const [chips, setChips] = useState<string[]>([])
  const dispatch = useAppDispatch();



  const handleClickChip = (e: SyntheticEvent, option: string) => {
    e.preventDefault();
    if (chips.length > 0) {
      if (chips.includes(option)) {
        const unique = chips.filter(chip => chip !== option)
        return setChips(unique)
      } else {
        return setChips(s => [...s, option])
      }
    } else {
      return setChips([option])
    }
  }

  const handleChangeChipColour = (option: string) => {
    if (chips.includes(option)) {
      return "#BBBBA3"
    } else {
      return "#EEEEE8"
    }
  }

  const handleGetRecipes = async (ingredient: string) => {
    const array = chips.map(chip => JSON.stringify(chip))
    const stringifiedArray = array.join(", ").replace(/['"]+/g, '')

    if (ingredient !== "") {
      await dispatch(fetchRecipes(ingredient + ", " + stringifiedArray));
    } else {
      await dispatch(fetchRecipes(ingredient + stringifiedArray));
    }
  }

  const options: string[] = ["Vegan", "Vegetarian", "Non-dairy", "Low-sugar", "Low-fat", "Low-calories", "Easy", "Dinner", "Lunch", "Breakfast"]

  return (
    <>
      <div className='description-div'>
        <p className='search-text'>
          Search receipes with ingredients in your fridge
        </p>
      </div>
      <div className='action-wrapper'>
        <div className='action-div'>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type='text'
            placeholder='Your ingredients'
            className='input-field'
          />
          <Stack direction="row" spacing={1} className='chip-wrap'>
            {options.map((option, id) =>
              <Chip
                key={id}
                label={option}
                onClick={(e) => handleClickChip(e, option)}
                style={{ backgroundColor: handleChangeChipColour(option), margin: 3 }}
              />
            )}
          </Stack>
        </div>
        <div className='action-div'>
          <button
            className='btn'
            type='submit'
            onClick={() => handleGetRecipes(`${input}`)}
          >
            Get inspirations
          </button>
        </div>
      </div>
    </>
  )
}

export default IngredientInput;