import { ReactNode } from "react";

export interface IconProps {
  icon: ReactNode;
  title?: string;
  redirect?: string;
  sizeBackground?: string;
  onClick?: () => void;
}
