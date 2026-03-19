import { Primary } from "./Primary";

export const Technologies = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto z-20 relative mt-32 px-6 md:px-12"
      id="technologies"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Technologies</h2>
        <p className="text-zinc-400 mt-4 max-w-[600px] mx-auto">The tools and frameworks I use to bring ideas to life.</p>
      </div>

      <div className="flex flex-col w-full gap-16">
        <Primary />
      </div>
    </section>
  );
};
