import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface ogReceipes {
  feed: {
    content: {
      ingredientLines: {
        ingredient: string;
        remainder?: string | null;
      }[];
      details: {
        name: string;
      };
    };
  }[];
  seo: object;
}

export interface Recipe {
  name: string;
  ingredients: string[];
}

interface RecipeState {
  loading: boolean;
  recipes: Recipe[];
}

const initialState: RecipeState = {
  loading: false,
  recipes: []
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
      const modifiedRes: Recipe[] = jsonRes.feed.map((el) => {
        return {
          name: el?.content?.details?.name,
          ingredients: el?.content?.ingredientLines?.map((i) => { return i.ingredient })
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
    addRecipe: (state, action: PayloadAction<{ name: string, ingredients: string[] }>) => {
      state.recipes.push({
        name: action.payload.name,
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
      throw new Error ("Fetching api failed.");
    });
  }
})

export default RecipeSlice.reducer;
export const { addRecipe } = RecipeSlice.actions;