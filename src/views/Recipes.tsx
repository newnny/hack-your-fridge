import React, { useState } from 'react';
import { useAppSelector } from "../Store/reduxHooks"
import IngredientDetails from './IngredientDetails';
import '../styles/RecipesStyles.css'
import { Divider } from '@mui/material';

const Receipes = () => {
  const [seeDetails, setSeeDetails] = useState<boolean>(false)
  const [btnIndex, setBtnIndex] = useState<number>(0)

  const recipes = useAppSelector(state => state.recipes.recipes)
  const loading = useAppSelector(state => state.recipes.loading)

  const handleClickDetails = (id: number) => {
    setBtnIndex(id)
    setSeeDetails(!seeDetails)
  }

  const handleOpenDirection = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      {loading ?
        <div>
          <p>Loading</p>
        </div>
        :
        <div>
          {recipes.map((r, i) =>
            <div key={i} style={{marginBottom: 10}}>
              <div className='recipe-overveiw-div'>
                {r.image.flatMap(item =>
                  <img
                    key={i}
                    src={item}
                    alt={`${r.name}-img`}
                    style={{ width: 350, height: 300 }}
                  />
                )}
                <p className='recipe-name'>
                  {r.name}
                </p>
              </div>
              <div className='button-group'>
                <button className='description-button'>
                  {r.totalTime}
                </button>
                <button
                  className='description-button'
                  onClick={() => handleClickDetails(i)}
                >
                  Ingredients
                </button>
                <button
                  className='description-button'
                  onClick={() => handleOpenDirection(r.directionsUrl)}
                >
                  Recipe
                </button>
              </div>
              {i === btnIndex && seeDetails &&
                <IngredientDetails recipes={r} />
              }
              
      <Divider variant="middle"  />
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Receipes