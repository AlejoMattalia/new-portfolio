import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

interface TimelineEvent {
    year: string;
    emoji: string;
    titleKey: string;
    descriptionKey: string;
}

const events: TimelineEvent[] = [
    {
        year: "2004",
        emoji: "👶",
        titleKey: "timeline.born.title",
        descriptionKey: "timeline.born.description",
    },
    {
        year: "2018",
        emoji: "🎮",
        titleKey: "timeline.first_code.title",
        descriptionKey: "timeline.first_code.description",
    },
    {
        year: "2022",
        emoji: "📚",
        titleKey: "timeline.started_studying.title",
        descriptionKey: "timeline.started_studying.description",
    },
    {
        year: "2023",
        emoji: "💼",
        titleKey: "timeline.first_job.title",
        descriptionKey: "timeline.first_job.description",
    },
    {
        year: "2023",
        emoji: "🚀",
        titleKey: "timeline.freelance.title",
        descriptionKey: "timeline.freelance.description",
    },
    {
        year: "2024",
        emoji: "🌍",
        titleKey: "timeline.international.title",
        descriptionKey: "timeline.international.description",
    },
    {
        year: "2025",
        emoji: "⚡",
        titleKey: "timeline.now.title",
        descriptionKey: "timeline.now.description",
    },
];

export const Timeline = () => {
    const { t } = useCustomTranslation();

    return (
        <section
            className="w-full max-w-[1200px] mx-auto z-20 relative px-6 md:px-12 flex flex-col items-center justify-center"
            id="timeline"
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
                    {t("timeline_section.title")}
                </h2>
                <p className="text-muted mt-4 transition-colors">
                    {t("timeline_section.subtitle")}
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative w-full max-w-[800px] mx-auto">
                {/* Vertical line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{ originY: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent"
                />

                <div className="flex flex-col gap-16">
                    {events.map((event, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className={`relative flex items-center gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                            >
                                {/* Card — half width */}
                                <div className="w-[calc(50%-2rem)]">
                                    <motion.div
                                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                        className={`group p-6 rounded-2xl bg-white/40 dark:bg-zinc-900/20 backdrop-blur-sm border border-border hover:border-foreground/20 shadow-sm hover:shadow-xl transition-all duration-500 ${isLeft ? "text-right" : "text-left"}`}
                                    >
                                        <span className="inline-block text-xs font-bold tracking-widest text-muted uppercase mb-2">
                                            {event.year}
                                        </span>
                                        <h3 className="text-base font-bold text-foreground transition-colors leading-snug">
                                            {t(event.titleKey)}
                                        </h3>
                                        <p className="text-muted text-sm mt-2 leading-relaxed transition-colors">
                                            {t(event.descriptionKey)}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Center dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 300 }}
                                        className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center text-xl shadow-md z-10"
                                    >
                                        {event.emoji}
                                    </motion.div>
                                </div>

                                {/* Empty spacer for the opposite side */}
                                <div className="w-[calc(50%-2rem)]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
