import { RedirectTextProps } from "@/interface/navbar";
import { useLocation, useNavigate } from "react-router-dom";

export const RedirectText = ({
  text,
  redirect,
  setOpenMenu,
}: RedirectTextProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and then scroll
      setTimeout(() => {
        const targetElement = document.querySelector(`#${redirect}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const targetElement = document.querySelector(`#${redirect}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (setOpenMenu) {
      setOpenMenu(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-muted font-semibold text-sm hover:text-foreground transition-all duration-300 relative group cursor-pointer"
    >
      {text}
      <span className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-foreground transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </button>
  );
};
