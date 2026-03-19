import { IconProps } from "@/interface/icon";

export const Icon = ({ icon, redirect, onClick }: IconProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={redirect}
      onClick={onClick}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-800/30 backdrop-blur-md border border-zinc-700/50 text-zinc-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300"
    >
      {icon}
    </a>
  );
};
