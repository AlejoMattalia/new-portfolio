
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { LinkIcon } from "@/assets/icons/LinkIcon";
import { CardProps } from "@/interface/project";
import { motion } from "framer-motion";

export const CardProject = ({
  img,
  title,
  description,
  technologies,
  linkRep,
  linkWeb,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col w-full rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm overflow-hidden hover:bg-zinc-800/20 transition-colors"
    >
      {/* Image Section */}
      <div className="w-full h-56 sm:h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 tracking-tight">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            {linkRep && (
              <a
                href={linkRep}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-100 transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon width="22px" height="22px" color="currentColor" />
              </a>
            )}
            {linkWeb && (
              <a
                href={linkWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-100 transition-colors"
                aria-label="Live Website"
              >
                <LinkIcon width="22px" height="22px" color="currentColor" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-full border border-zinc-700/50 transition-colors group-hover:border-zinc-500/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
