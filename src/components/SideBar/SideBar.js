import { Typography } from "@mui/material";
import React from "react";
import { StyledNavbar } from "../Navbar/NavbarStyle";
import CategorySelect from "../CategorySelect/CategorySelect";

const SideBar = () => {
  return (
    <>
      <StyledNavbar position="static" sx={{ justifyContent: "center" }}>
        <Typography>Ingredients</Typography>
      </StyledNavbar>
      <CategorySelect />
    </>
  );
};

export default SideBar;
