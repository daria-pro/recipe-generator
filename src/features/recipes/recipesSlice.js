import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/recipes";

const initialState = {
  recipes: [],
  status: "idle",
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const response = await api.get("/randomselection.php");
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const searchByName = createAsyncThunk(
  "recipes/searchByName",
  async (value) => {
    try {
      const response = await api.get(`/search.php?s=${value}`);
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
        state.recipes = [].concat(loadedRecipes);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchByName.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedRecipes = action.payload;
        state.recipes = [].concat(loadedRecipes);
      })
      .addCase(searchByName.rejected, (state, action) => {
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
