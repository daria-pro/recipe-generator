import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { StyledSelect } from "./CategorySelectStyle";
import {
  fetchCategories,
  fetchRecipes,
  searchByCategory,
  selectAllCategories,
} from "../../features/recipes/recipesSlice";

export default function CategorySelect() {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setCategory(value);
    if (value.length > 0) {
      dispatch(searchByCategory(value));
    } else {
      dispatch(fetchRecipes());
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Select category
        </InputLabel>
        <StyledSelect
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Select category"
          sx={{ borderColor: "#fff" }}
        >
          <MenuItem value="">No category</MenuItem>
          {categories[0] ? (
            categories[0].categories.map((category) => (
              <MenuItem
                value={category.strCategory}
                key={category.idCategory}
                sx={{ width: 200 }}
              >
                {category.strCategory}
              </MenuItem>
            ))
          ) : (
            <MenuItem>No categories</MenuItem>
          )}
        </StyledSelect>
      </FormControl>
    </div>
  );
}
