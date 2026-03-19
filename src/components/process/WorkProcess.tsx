import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

interface Step {
    number: string;
    emoji: string;
    titleKey: string;
    descriptionKey: string;
}

const steps: Step[] = [
    {
        number: "01",
        emoji: "🔍",
        titleKey: "process_section.steps.discovery.title",
        descriptionKey: "process_section.steps.discovery.description",
    },
    {
        number: "02",
        emoji: "🎨",
        titleKey: "process_section.steps.design.title",
        descriptionKey: "process_section.steps.design.description",
    },
    {
        number: "03",
        emoji: "⚙️",
        titleKey: "process_section.steps.development.title",
        descriptionKey: "process_section.steps.development.description",
    },
    {
        number: "04",
        emoji: "🧪",
        titleKey: "process_section.steps.testing.title",
        descriptionKey: "process_section.steps.testing.description",
    },
    {
        number: "05",
        emoji: "🚀",
        titleKey: "process_section.steps.launch.title",
        descriptionKey: "process_section.steps.launch.description",
    },
];

export const WorkProcess = () => {
    const { t } = useCustomTranslation();

    return (
        <section
            className="w-full max-w-[1200px] mx-auto z-20 relative px-6 md:px-12 flex flex-col items-center justify-center"
            id="process"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20 w-full max-w-[600px] mx-auto"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight transition-colors">
                    {t("process_section.title")}
                </h2>
                <p className="text-muted mt-4 transition-colors">
                    {t("process_section.subtitle")}
                </p>
            </motion.div>

            {/* Steps */}
            <div className="relative w-full">
                {/* Horizontal connector line — visible lg+ */}
                <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="flex flex-col items-center text-center gap-4"
                        >
                            {/* Circle */}
                            <motion.div
                                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                className="w-[104px] h-[104px] rounded-full bg-white/40 dark:bg-zinc-900/20 backdrop-blur-sm border border-border flex flex-col items-center justify-center shadow-sm hover:shadow-xl hover:border-foreground/20 transition-all duration-500 cursor-default"
                            >
                                <span className="text-2xl">{step.emoji}</span>
                                <span className="text-xs font-bold tracking-widest text-muted mt-1">
                                    {step.number}
                                </span>
                            </motion.div>

                            {/* Text */}
                            <div>
                                <h3 className="text-sm font-bold text-foreground transition-colors">
                                    {t(step.titleKey)}
                                </h3>
                                <p className="text-muted text-xs mt-2 leading-relaxed transition-colors">
                                    {t(step.descriptionKey)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
