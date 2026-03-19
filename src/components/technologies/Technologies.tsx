import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";
import { Primary } from "./Primary";

export const Technologies = () => {
  const { t } = useCustomTranslation();

  return (
    <section
      className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto z-20 relative mt-0 px-6 md:px-12"
      id="technologies"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight transition-colors">{t("technologies_section.title")}</h2>
          <p className="text-muted mt-4 max-w-[600px] mx-auto transition-colors">{t("technologies_section.subtitle")}</p>
        </div>

        <div className="flex flex-col w-full gap-16">
          <Primary />
        </div>
      </motion.div>
    </section>
  );
};
