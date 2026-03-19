import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

export const Stats = () => {
    const { t } = useCustomTranslation();

    const stats = [
        {
            value: t("home.stats.experience.value"),
            label: t("home.stats.experience.label"),
        },
        {
            value: t("home.stats.projects.value"),
            label: t("home.stats.projects.label"),
        },
        {
            value: t("home.stats.commits.value"),
            label: t("home.stats.commits.label"),
        },
    ];

    return (
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 xl:px-32 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative p-8 rounded-3xl !bg-white dark:!bg-zinc-900/20 border border-border hover:border-foreground/10 transition-all duration-500 overflow-hidden shadow-md hover:shadow-2xl"
                    >
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <motion.span
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                                className="text-5xl md:text-6xl font-bold text-foreground mb-3 tracking-tighter transition-colors"
                            >
                                {stat.value}
                            </motion.span>
                            <span className="text-muted text-xs md:text-sm font-semibold tracking-[0.2em] uppercase transition-colors">
                                {stat.label}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
