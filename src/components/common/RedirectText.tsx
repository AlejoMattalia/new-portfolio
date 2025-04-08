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
    }
  };

  return (
    <div
      onClick={handleClick}
      className="text-white font-bold text-sm cursor-pointer p-4 px-5 hover:bg-gray-100/10 rounded transition duration-100 ease-in-out"
    >
      {text}
    </div>
  );
};
