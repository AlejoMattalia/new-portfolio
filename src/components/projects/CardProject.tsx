import { useState } from "react";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { LinkIcon } from "@/assets/icons/LinkIcon";
import { CardProps } from "@/interface/project";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "../common/Skeleton";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

export const CardProject = ({
  img,
  title,
  description,
  technologies,
  linkRep,
  linkWeb,
}: CardProps) => {
  const { t } = useCustomTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col w-full rounded-3xl border border-border bg-zinc-50 dark:bg-zinc-900/20 backdrop-blur-sm overflow-hidden hover:bg-zinc-100 dark:hover:bg-zinc-800/20 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none h-[450px]"
    >
      {/* Image Section */}
      <div className="w-full h-56 sm:h-64 overflow-hidden relative">
        <AnimatePresence>
          {!imageLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-20"
            >
              <Skeleton className="w-full h-full rounded-none" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={img}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            {linkRep && (
              <a
                href={linkRep}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
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
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Live Website"
              >
                <LinkIcon width="22px" height="22px" color="currentColor" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm md:text-base text-subtle leading-relaxed mb-6 flex-1 transition-colors">
          {t(description)}
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold text-muted bg-zinc-100 dark:bg-zinc-800/50 rounded-full border border-zinc-200 dark:border-zinc-700/50 transition-all group-hover:border-zinc-300 dark:group-hover:border-zinc-500/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
