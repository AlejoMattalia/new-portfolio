import { RedirectTextProps } from "@/interface/navbar";

export const RedirectText = ({ text, href }: RedirectTextProps) => {
  return (
    <a
      href={href}
      className="text-white font-bold text-sm cursor-pointer p-4 px-5 hover:bg-gray-100/10 rounded transition duration-100 ease-in-out"
    >
      {text}
    </a>
  );
};
