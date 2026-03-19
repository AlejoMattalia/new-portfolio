import { arrayOtherTechnologies } from "@/utils/arrays";
import { motion } from "framer-motion";
import { ImageTooltip } from "../common/ImageTooltip";

export const Secondary = () => {
  return (
    <motion.section
      className="w-full flex flex-col gap-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="text-xl font-semibold text-zinc-300">Infrastructure, Databases & Tools</h3>

      <div className="flex flex-wrap items-center justify-start gap-6 w-full">
        {arrayOtherTechnologies.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center p-4 rounded-2xl bg-zinc-800/20 border border-zinc-700/30 hover:bg-zinc-700/30 transition-colors"
          >
            <ImageTooltip
              image={item.image}
              title={item.title}
              size="40"
              placement="top"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
