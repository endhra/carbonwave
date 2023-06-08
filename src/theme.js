import { createTheme } from "@mui/material"

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "unset" } },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: "1rem",
          fontWeight: 300,
          lineHeight: "1.66em"
        },
        
      },
    },
  },
})

export default theme
