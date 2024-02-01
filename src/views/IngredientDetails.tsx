import { RecipeInterface } from "../Store/modules/recipesSlice"
import '../styles/IngredientDetailsStyles.css'

interface RecipeDetailsProps {
  recipes: RecipeInterface
}

const IngredientDetails: React.FC<RecipeDetailsProps> = ({
  recipes
}) => {
  const CapitalisedFirstLetter = (input: string) => {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
  return (
    <div>
      {recipes.ingredients.map((ingredient, index) => {
        if ((recipes.ingredients).length - 1 === index) {
          return (
            <p key={index} className="ingredient-text">
              {`${CapitalisedFirstLetter(ingredient.ingredient)}: 
              ${ingredient.amount.quantity ? ingredient.amount.quantity : "Not specified"}
              ${ingredient.amount.unit ? ingredient.amount.unit : ""}`
                + (ingredient.remainder && (" (" + ingredient.remainder + ")"))
              }
            </p>
          )
        } else {
          return (
            <p key={index} className="ingredient-text">
              {`${CapitalisedFirstLetter(ingredient.ingredient)}: 
              ${ingredient.amount.quantity ? ingredient.amount.quantity : "Not specified"}
              ${ingredient.amount.unit ? ingredient.amount.unit : ""}`
                + (ingredient.remainder && (" (" + ingredient.remainder + ")"))
                + ", "
              }
            </p>
          )
        }
      })}
    </div>
  )
}

export default IngredientDetails