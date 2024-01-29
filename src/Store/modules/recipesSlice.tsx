import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface ogReceipes {
  feed: {
    content: {
      ingredientLines: {
        ingredient: string;
        remainder?: string | null;
        wholeLine: string;
        amount: {
          metric: {
            quantity: number;
            unit: {
              abbreviation: string;
            }
          }
        }
      }[];
      details: {
        name: string;
        images: {
          resizableImageUrl: string
        }[];
        totalTime: string;
        directionsUrl: string;
      };
    };
  }[];
}

export interface IngredientInterface {
  ingredient: string;
  remainder?: string | null;
  wholeLine: string;
  amount: {
    quantity: number | null;
    unit: string | null
  }
}

export interface RecipeInterface {
  name: string;
  image: string[];
  totalTime: string;
  directionsUrl: string;
  ingredients: IngredientInterface[];
}

interface RecipeState {
  loading: boolean;
  recipes: RecipeInterface[];
  favouriteRecipes: RecipeInterface[];
}

const initialState: RecipeState = {
  loading: false,
  recipes: [],
  favouriteRecipes: []
}

export const fetchRecipes = createAsyncThunk("recipes/fetch", async (ingredient: string, thunkAPI) => {
  const apiUrl: string = "https://yummly2.p.rapidapi.com/feeds/search";
  const apiKey: string = process.env.REACT_APP_TASTY_API_KEY || "";

  try {
    const response = await fetch(`${apiUrl}?start=0 &maxResult=15&start=10&q=${ingredient}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    } else {
      const jsonRes: ogReceipes = await response.json();
      const modifiedRes: RecipeInterface[] = jsonRes.feed.map((el) => {
        return {
          name: el?.content?.details?.name,
          image: el?.content?.details?.images?.map(i => i.resizableImageUrl),
          totalTime: el?.content?.details?.totalTime,
          directionsUrl: el?.content?.details?.directionsUrl,
          ingredients: el?.content?.ingredientLines?.map((i) => {
            return {
              ingredient: i.ingredient,
              remainder: i.remainder,
              wholeLine: i.wholeLine,
              amount: {
                quantity: i.amount.metric.quantity,
                unit: i.amount.metric.unit.abbreviation.includes(".") ? i.amount.metric.unit.abbreviation.replace(".", "") : i.amount.metric.unit.abbreviation
              }
            }
          })
        };
      });
      return modifiedRes;
    }
  } catch (error) {
    console.error(error);
  }
})

export const RecipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<{
      name: string, image: string[], totalTime: string, directionsUrl: string, ingredients: []
    }>) => {
      state.favouriteRecipes.push({
        name: action.payload.name,
        image: action.payload.image,
        totalTime: action.payload.totalTime,
        directionsUrl: action.payload.directionsUrl,
        ingredients: action.payload.ingredients
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      if (action.payload) {
        state.recipes = action.payload;
        state.loading = false;
      } else {
        console.log("action.payload is null or undefined")
      }
    });
    builder.addCase(fetchRecipes.rejected, (state) => {
      state.loading = false;
      throw new Error("Fetching api failed.");
    });
  }
})

export default RecipeSlice.reducer;
export const { addRecipe } = RecipeSlice.actions;