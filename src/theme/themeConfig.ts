// theme/themeConfig.ts
import { createTheme, ThemeOptions } from "@mui/material";

export const getTheme = (mode: "light" | "dark") => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#ffffff",
              contrastText: "#000000",
            },
            background: {
              default: "#09090b",
              paper: "#18181b",
            },
          }
        : {
            primary: {
              main: "#09090b",
              contrastText: "#ffffff",
            },
            background: {
              default: "#ffffff",
              paper: "#f4f4f5",
            },
          }),
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color 0.3s ease, color 0.3s ease",
          },
        },
      },
    },
  };
  return createTheme(themeOptions);
};

// Mantener compatibilidad inicial si es necesario, pero preferiblemente usar getTheme
export const theme = getTheme("dark");
