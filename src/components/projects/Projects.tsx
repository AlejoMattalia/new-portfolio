import { projects } from "@/api/api";
import { CardProject } from "./CardProject";

export const Projects = () => {
  return (
    <section
      className="w-full max-w-[1200px] mx-auto z-20 relative mt-32 px-6 md:px-12"
      id="projects"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Projects</h2>
        <p className="text-zinc-400 mt-4 max-w-[600px] mx-auto">Selected works that showcase my skills and passion.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
