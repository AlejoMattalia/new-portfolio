import { useState, useMemo } from "react";
import { projects } from "@/api/api";
import { CardProject } from "./CardProject";
import { motion, AnimatePresence } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

export const Projects = () => {
  const { t } = useCustomTranslation();
  const [selectedTech, setSelectedTech] = useState<string>("All");

  // Normalize tech names for consistent filtering
  const normalizeTech = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes("react")) return "React";
    if (t.includes("next")) return "Next.js";
    if (t.includes("node")) return "Node.js";
    if (t.includes("tailwind")) return "Tailwind";
    if (t.includes("astro")) return "Astro";
    if (t.includes("firebase")) return "Firebase";
    if (t.includes("mongo")) return "MongoDB";
    if (t.includes("postgre")) return "PostgreSQL";
    return tech;
  };

  const categories = useMemo(() => {
    const techs = projects.flatMap(p => p.technologies.map(normalizeTech));
    return ["All", ...Array.from(new Set(techs))].sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTech === "All") return projects;
    return projects.filter(project =>
      project.technologies.some(tech => normalizeTech(tech) === selectedTech)
    );
  }, [selectedTech]);

  return (
    <section
      className="w-full max-w-[1200px] mx-auto z-20 relative pt-32 px-6 md:px-12"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter transition-colors">
          {t("projects_section.title")}
        </h2>
        <p className="text-muted mt-4 max-w-[600px] mx-auto text-lg transition-colors">
          {t("projects_section.subtitle")}
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`cursor-pointer px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${selectedTech === tech
              ? "bg-foreground text-background shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-105"
              : "bg-white dark:bg-zinc-900 border border-border text-muted hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-foreground shadow-sm"
              }`}
          >
            {tech === "All" ? t("projects_section.filter_all") : tech}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <CardProject {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
