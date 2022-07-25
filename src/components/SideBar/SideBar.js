import { Typography } from "@mui/material";
import React from "react";
import { StyledNavbar } from "../Navbar/NavbarStyle";

const SideBar = () => {
  return (
    <StyledNavbar position="static" sx={{ justifyContent: "center" }}>
      <Typography>Ingredients</Typography>
    </StyledNavbar>
  );
};

export default SideBar;
