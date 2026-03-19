import { RedirectTextProps } from "@/interface/navbar";

export const RedirectText = ({
  text,
  redirect,
  setOpenMenu,
}: RedirectTextProps) => {
  const handleClick = () => {
    const targetElement = document.querySelector(`#${redirect}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    if (setOpenMenu) {
      setOpenMenu(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-zinc-400 font-medium text-sm hover:text-white transition-colors duration-300 relative group lowercase"
    >
      {text}
      <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </button>
  );
};
