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
      sx={{ fontWeight: "bold" }}
      size={size}
    >
      {title}
    </Button>
  );
};
