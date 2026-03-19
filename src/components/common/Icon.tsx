import { IconProps } from "@/interface/icon";

export const Icon = ({ icon, redirect, onClick }: IconProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={redirect}
      onClick={onClick}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border border-current text-muted hover:bg-foreground hover:text-background transition-all duration-300 group cursor-pointer"
    >
      {icon}
    </a>
  );
};
