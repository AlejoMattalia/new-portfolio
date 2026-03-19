// theme/themeConfig.ts
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark", // ✅ Esto activa el modo oscuro
    primary: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    background: {
      default: "#09090b",
      paper: "#18181b",
    },
  },
});
