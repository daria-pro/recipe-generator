import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

const RECIPES_URL = "https://www.themealdb.com/api/json/v2/9973533/latest.php";

const initialState = {
  recipes: [],
  status: "idle",
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const response = await axios.get(RECIPES_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRecipes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedRecipes = action.payload;
        state.recipes = state.recipes.concat(loadedRecipes);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllRecipes = (state) => state.recipes.recipes;
export const getRecipesStatus = (state) => state.recipes.status;
export const getRecipesError = (state) => state.recipes.error;

export const { increment, decrement } = recipesSlice.actions;
export default recipesSlice.reducer;
