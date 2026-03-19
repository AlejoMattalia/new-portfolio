import { arrayFrontend, arrayBackend, arrayInfra } from "@/utils/arrays";
import { motion } from "framer-motion";

export const Primary = () => {
  return (
    <motion.section
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Pillar 1: Frontend Ecosystem */}
      <div className="rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-zinc-700/50 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <h3 className="text-xl font-semibold text-zinc-300 relative z-10 w-full mb-2">Frontend Ecosystem</h3>
        <div className="flex flex-col gap-4 relative z-10 flex-1   overflow-y-auto thin-scrollbar pr-2 max-h-[600px]">
          {arrayFrontend.map((tech, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-zinc-800/20 p-4 rounded-2xl border border-zinc-700/30 w-full"
            >
              <img src={tech.image} alt={tech.title} className="w-10 h-10 object-contain" />
              <span className="text-lg font-medium text-white">{tech.title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pillar 2: Backend Ecosystem */}
      <div className="rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-zinc-700/50 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <h3 className="text-xl font-semibold text-zinc-300 relative z-10 w-full mb-2">Backend Ecosystem</h3>
        <div className="flex flex-col gap-4 relative z-10 flex-1  overflow-y-auto thin-scrollbar pr-2 max-h-[600px]">
          {arrayBackend.map((tech, index) => (
            <motion.div
              key={index}

              className="flex items-center gap-4 bg-zinc-800/20 p-4 rounded-2xl border border-zinc-700/30 w-full"
            >
              <img src={tech.image} alt={tech.title} className="w-10 h-10 object-contain" />
              <span className="text-lg font-medium text-white">{tech.title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pillar 3: Infrastructure, DBs & Tools */}
      <div className="rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-zinc-700/50 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <h3 className="text-xl font-semibold text-zinc-300 relative z-10 w-full mb-2">Infrastructure & Tools</h3>
        <div className="flex flex-col gap-4 relative z-10 flex-1 overflow-y-auto thin-scrollbar pr-2 max-h-[600px]">
          {arrayInfra.map((tech, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-zinc-800/20 p-4 rounded-2xl border border-zinc-700/30 w-full shrink-0"
            >
              <img src={tech.image} alt={tech.title} className="w-10 h-10 object-contain" />
              <span className="text-lg font-medium text-white">{tech.title}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.section>
  );
};
