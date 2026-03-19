import { ButtonProps } from "@/interface/button";
import { Button, useTheme } from "@mui/material";

export const CustomButtom = ({
  title,
  variant,
  handleClick,
  size = "medium",
}: ButtonProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      sx={{
        fontWeight: 600,
        textTransform: "none",
        borderRadius: "12px",
        boxShadow: "none",
        letterSpacing: "0.5px",
        transition: "all 0.3s ease",
        px: 4,
        py: 1.5,
        color: variant === "outlined"
          ? theme.palette.text.primary
          : theme.palette.background.default,
        borderColor: variant === "outlined"
          ? theme.palette.divider
          : "transparent",
        backgroundColor: variant === "contained"
          ? theme.palette.text.primary
          : "transparent",
        "&:hover": {
          boxShadow: "0 8px 20px -8px rgba(0,0,0,0.3)",
          backgroundColor: variant === "contained"
            ? isDark ? "#e4e4e7" : "#27272a"
            : "rgba(0,0,0,0.05)",
          borderColor: variant === "outlined"
            ? theme.palette.text.primary
            : "transparent",
          transform: "translateY(-2px)",
        },
      }}
      size={size}
    >
      {title}
    </Button>
  );
};
