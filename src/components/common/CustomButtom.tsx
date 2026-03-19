import { ButtonProps } from "@/interface/button";
import { Button } from "@mui/material";

export const CustomButtom = ({
  title,
  variant,
  handleClick,
  size = "medium",
}: ButtonProps) => {
  return (
    <Button
      onClick={handleClick}
      variant={variant}
      sx={{
        fontWeight: 500,
        textTransform: "none",
        borderRadius: "8px",
        boxShadow: "none",
        letterSpacing: "0.5px",
        transition: "all 0.3s ease",
        color: variant === "outlined" ? "#fff" : "#000",
        borderColor: variant === "outlined" ? "rgba(255,255,255,0.2)" : "transparent",
        backgroundColor: variant === "contained" ? "#fff" : "transparent",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: variant === "contained" ? "#e4e4e7" : "rgba(255,255,255,0.05)",
          borderColor: variant === "outlined" ? "rgba(255,255,255,0.4)" : "transparent",
        },
      }}
      size={size}
    >
      {title}
    </Button>
  );
};
