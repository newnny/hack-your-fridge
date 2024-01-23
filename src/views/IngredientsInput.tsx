import React from 'react';
import { getReceipeResponse } from '../api/receipesAPI';



const IngredientInput: React.FC = () => {

  const handleGetDishes = async (maxResult: string, ingredient: string) => {
    const receipes = await getReceipeResponse(maxResult, ingredient)
    console.log(receipes)
  }


  return (
    <div>
      <button onClick={() => handleGetDishes('30', 'chicken')}>
        Get inspiration
      </button>


    </div>
  )
}

export default IngredientInput;