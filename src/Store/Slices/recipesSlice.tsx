import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRecipes } from "../api/fetchRecipes";


interface IngredientInterface {
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


export const recipeSlice = createSlice({
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


export const { addRecipe } = recipeSlice.actions;