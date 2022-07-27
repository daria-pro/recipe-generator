import { styled } from "@mui/material/styles";

export const StyledRecipe = styled("div")(({ theme }) => ({
  padding: "70px 0",

  "& .recipe": {
    "&__goback": {
      textDecoration: "none",
      color: "#fff",
      fontSize: "18px",
      fontWeight: 500,
      padding: "15px 0",
    },

    "&__top-info": {
      display: "flex",
      margin: "30px 0",
    },
    "&__image": {
      maxWidth: "380px",
      marginRight: "200px",
    },
    "&__list": {
      listStyle: "none",
      padding: 0,
      margin: 0,
      width: "400px",
    },

    "&__list-item": {
      display: "flex",
      justifyContent: "space-between",
    },

    "&__list-item p": {
      margin: 0,
    },
    "&__instructions": {
      lineHeight: "24px",
      padding: "0 40px",
      border: "1px solid #eee",
      whiteSpace: "pre-wrap",
    },
  },
}));
