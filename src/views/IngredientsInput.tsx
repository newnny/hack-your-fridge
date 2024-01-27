import React, { useState } from 'react';
import { fetchRecipes } from '../Store/modules/recipesSlice';
import '../styles/IngredientsInputStyle.css';
import { useAppDispatch } from '../Store/reduxHooks';

const IngredientInput: React.FC = () => {
  const [input, setInput] = useState<string>("")
  const [click, setClick]= useState<boolean>(false)

  const dispatch = useAppDispatch();

  const handleGetRecipes = async (ingredient: string) => {
    const a = await dispatch(fetchRecipes(ingredient));
    setClick(!click)
  }
  console.log(click, "click")

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