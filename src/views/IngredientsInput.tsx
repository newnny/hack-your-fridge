import React, { useState, useEffect } from 'react';
import { getReceipeResponse } from '../api/receipesAPI';
import Brush from '../components/Brush';
import { BrushSvg } from '../utils/BrushSvg';
import '../styles/IngredientsInputStyle.css';

type Dimentions = {
  width: number;
  height: number;
}

const IngredientInput: React.FC = () => {
  const [input, setInput] = useState<string>("")
  const [dimentions, setDimentions] = useState<Dimentions>({
    width: window.innerWidth,
    height: window.innerWidth * 0.5
  })

  useEffect(() => {
    const updateDimension = () => {
      setDimentions({
        width: window.innerWidth,
        height: window.innerWidth * 0.5
      })
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [window.innerWidth])

  const handleGetDishes = async (maxResult: string, ingredient: string) => {
    const receipes = await getReceipeResponse(maxResult, ingredient)
    console.log(receipes)
  }


  return (
    <div className='main-wrapper'>
      <div className='animation-div'>
        <div className='anim-circle'
          style={{
            width: dimentions.width / 2.5,
            height: dimentions.width / 2.5,
          }}
        >
          <div>
            <Brush dimentions={dimentions}/>
            <BrushSvg />
          </div>
        </div>
      </div>
      <div className='description-div'>
        <p> Hello Fooodies</p>
        <p style={{ color: "#adae59" }}> HACK YOUR FRIDGE: #adae59</p>
        <p style={{ color: "#acab9b" }}>text colour match: #acab9b</p>
        <p style={{ color: "#6a7d72" }}>text colour match: #6a7d72</p>
        <p style={{ color: "#8d9a90" }}>text colour match: #8d9a90</p>
      </div>
      <div className='action-wrapper'>
        <div className='action-div'>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type='text'
          />
        </div>
        <div className='action-div'>
          <button onClick={() => handleGetDishes('30', `${input}`)}>
            Get inspiration
          </button>
        </div>
      </div>
    </div>
  )
}

export default IngredientInput;