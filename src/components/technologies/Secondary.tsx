import { arrayOtherTechnologies } from "@/utils/arrays";
import { motion } from "framer-motion";
import { ImageTooltip } from "../common/ImageTooltip";

export const Secondary = () => {
  return (
    <motion.section
      className="w-full flex flex-col gap-8 rounded-3xl border border-border bg-white dark:bg-zinc-900/20 shadow-md p-8 transition-all"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="text-xl font-bold text-subtle transition-colors">Infrastructure, Databases & Tools</h3>

      <div className="flex flex-wrap items-center justify-start gap-6 w-full">
        {arrayOtherTechnologies.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-zinc-800/20 border border-border dark:border-zinc-700/30 hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-all shadow-sm hover:shadow-md"
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
