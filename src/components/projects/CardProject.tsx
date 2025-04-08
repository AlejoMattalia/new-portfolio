import { useState } from "react";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { LinkIcon } from "@/assets/icons/LinkIcon";
import { CardProps } from "@/interface/project";

export const CardProject = ({
  img,
  title,
  description,
  technologies,
  linkRep,
  linkWeb,
}: CardProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleOverlay = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <div
      className="relative w-64 bg-base-100 shadow-xl group overflow-hidden cursor-pointer border border-gray-100 rounded-2xl"
      onClick={toggleOverlay}
    >
      <figure className="w-full h-44 m-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </figure>

      <div
        className={`absolute inset-0 bg-black bg-opacity-90 transition-opacity duration-300 flex flex-col justify-start items-center text-center px-5 py-3 ${
          isMobileOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h2 className="card-title text-[#F4F4F4]">{title}</h2>
        <p className="text-xs text-[#F4F4F4]">{description}</p>

        <div className="w-full flex items-center justify-center gap-1 mt-5 flex-wrap">
          {technologies?.map((tech, index) => (
            <p
              key={index}
              className="text-xs border border-primary rounded-xl text-primary font-bold py-0.5 text-center w-24"
            >
              {tech}
            </p>
          ))}
        </div>

        <div className="flex items-end justify-end mt-3 gap-2 w-full absolute bottom-1.5 right-1.5">
          {linkWeb && (
            <a
              href={linkWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="group/icon bg-transparent p-1 rounded-full transition-colors duration-300 hover:bg-[#8e44ad]"
              onClick={(e) => e.stopPropagation()}
            >
              <LinkIcon width="20px" height="20px" color="#fff" />
            </a>
          )}

          {linkRep && (
            <a
              href={linkRep}
              target="_blank"
              rel="noopener noreferrer"
              className="group/icon bg-transparent p-1 rounded-full transition-colors duration-300 hover:bg-[#8e44ad]"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon width="20px" height="20px" color="#fff" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
