import React, { useState, useEffect } from 'react';
import { useAppSelector } from "../Store/reduxHooks"
import IngredientDetails from './IngredientDetails';
import '../styles/RecipesStyles.css'
import { Divider, IconButton } from '@mui/material';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const Receipes = () => {
  const [seeDetails, setSeeDetails] = useState<boolean>(false)
  const [btnIndex, setBtnIndex] = useState<number>(0)
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const recipes = useAppSelector(state => state.recipes.recipes)
  const loading = useAppSelector(state => state.recipes.loading)

  const handleClickDetails = (id: number) => {
    setBtnIndex(id)
    id === btnIndex && setSeeDetails(!seeDetails)
  }

  const handleIndexIncrement = () => {
    setSlideIndex(slideIndex + 1)
  }

  const handleIndexDecrement = () => {
    setSlideIndex(slideIndex - 1)
  }

  const handleOpenDirection = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useEffect(()=> {
    setBtnIndex(0);
    setSlideIndex(0)
    setSeeDetails(false)
  },[recipes])

  return (
    <div>
      {!loading ?
        <div>
          <p>Loading</p>
        </div>
        :
        <div>
          {recipes.map((r, i) =>i === slideIndex && 
            <div key={i} style={{ marginBottom: 10 }}>
              <div className='recipe-overveiw-div'>
                <div className='recipe-img-wrap'>
                  {recipes.length > 0 && slideIndex > 0 &&
                    <div className='slide-btn'>
                      <IconButton onClick={handleIndexDecrement}>
                        <ArrowBackIosNewSharpIcon />
                      </IconButton>
                    </div>
                  }
                  {r.image.flatMap(item =>
                    <img
                      key={i}
                      src={item}
                      alt={`${r.name}-img`}
                      style={{ width: 350, height: 300 }}
                    />
                  )}
                  {recipes.length > 0 && slideIndex + 1 !== recipes.length &&
                    <div className='slide-btn'>
                      <IconButton onClick={handleIndexIncrement}>
                        <ArrowForwardIosSharpIcon />
                      </IconButton>
                    </div>
                  }
                </div>
                <p className='recipe-name'>
                  {r.name}
                </p>
              </div>
              <div className='button-group'>
                <button className='description-button'>
                  {r.totalTime}
                </button>
                <button
                  className='description-clickable-button'
                  onClick={() => handleClickDetails(i)}
                >
                  Ingredients
                </button>
                <button
                  className='description-clickable-button'
                  onClick={() => handleOpenDirection(r.directionsUrl)}
                >
                  Recipe
                </button>
              </div>
              {i === btnIndex && seeDetails &&
                <IngredientDetails recipes={r} />
              }

              <Divider variant="middle" />
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Receipes