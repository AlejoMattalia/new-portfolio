import { projects } from "@/api/api";
import { CardProject } from "./CardProject";

export const Projects = () => {
  return (
    <section
      className=" w-full max-w-[950px] relative z-20  mt-20 lg:mt-28"
      id="projects"
    >
      <h1 className="text-3xl font-bold text-center mb-10">PROYECTOS</h1>

      <div className="w-full flex items-center justify-center flex-wrap gap-16 mt-16">
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
