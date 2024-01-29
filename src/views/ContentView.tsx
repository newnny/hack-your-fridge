import IngredientInput from "./IngredientsInput"
import Receipes from "./Recipes"

const ContentView = () => {
  return (
    <div style={{margin: 10}}>
      <IngredientInput />
      <Receipes />
    </div>
  )
}

export default ContentView