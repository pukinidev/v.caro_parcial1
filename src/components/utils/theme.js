import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    typography: {
      fontFamily: ["Roboto"].join(","),
      
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
   
  },
});

export default theme;
