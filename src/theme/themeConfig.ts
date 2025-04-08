// theme/themeConfig.ts
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark", // ✅ Esto activa el modo oscuro
    primary: {
      main: "#8e44ad",
      contrastText: "#fff",
    },
  },
});
