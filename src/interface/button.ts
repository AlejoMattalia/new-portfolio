export interface ButtonProps {
  title: string;
  variant?: "text" | "outlined" | "contained";
  handleClick?: () => void;
  size?: "small" | "medium" | "large";
}
