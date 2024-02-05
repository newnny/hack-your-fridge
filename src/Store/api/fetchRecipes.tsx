import { createAsyncThunk } from "@reduxjs/toolkit";
import { RecipeInterface } from "../Slices/recipesSlice";

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

const apiUrl: string = "https://yummly2.p.rapidapi.com/feeds/search";
const apiKey: string = process.env.REACT_APP_YUMMLY_API_KEY as string;

export const fetchRecipes = createAsyncThunk("recipes/fetch", async (ingredient: string, thunkAPI) => {
  const res = await fetch(`${apiUrl}?start=0&maxResult=20&start=10&q=${ingredient}`, {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    },
  });
  
  try {
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    } else {
      const jsonRes: ogReceipes = await res.json();
      const modifiedRes: RecipeInterface[] = jsonRes.feed.map((el) => {
        return {
          name: el.content.details.name,
          image: el.content.details.images.map(i => i.resizableImageUrl),
          totalTime: el.content.details.totalTime,
          directionsUrl: el.content.details.directionsUrl,
          ingredients: el.content.ingredientLines.map((i) => {
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
    if (error instanceof TypeError && error.message.includes('API key')) {
      console.error('Invalid API key:', error);
    } else {
      console.error('There was a problem with the Fetch operation:', error);
    }
  }
})