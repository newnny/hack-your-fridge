import { useAppSelector } from "../Store/reduxHooks"

const Receipes = () => {
  const recipes = useAppSelector(state => state.recipes.recipes)
  console.log(recipes, "recipes")
  const loading = useAppSelector(state => state.recipes.loading)
  return (
    <div>
      {loading ?
        <div>
          <p>Loading</p>
          <p style={{ color: "#acab9b" }}>text colour match: #acab9b</p>
          <p style={{ color: "#6a7d72" }}>text colour match: #6a7d72</p>
          <p style={{ color: "#8d9a90" }}>text colour match: #8d9a90</p>
        </div>
        :
        <div>
          {recipes.map((r, i) =>
            <div key={i}>
              <p style={{ color: "#acab9b" }}>
                {r.name}
              </p>
              <p style={{ color: "#6a7d72" }}>
                {r.ingredients.map((ingredient, index) => (
                  (r.ingredients).length-1 === index ? ingredient : ingredient + ", "
                ))}
              </p>
            </div>
          )}
        </div>}
    </div>
  )
}

export default Receipes