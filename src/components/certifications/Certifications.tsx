import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

interface Cert {
    emoji: string;
    institution: string;
    color: string;
    titleKey: string;
    descriptionKey: string;
    date: string;
    hours?: string;
}

const certs: Cert[] = [
    {
        emoji: "🎓",
        institution: "Teclab",
        color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 hover:border-blue-500/40",
        titleKey: "certifications.teclab.title",
        descriptionKey: "certifications.teclab.description",
        date: "Feb 2024",
    },
    {
        emoji: "⚛️",
        institution: "Coderhouse",
        color: "from-yellow-400/10 to-orange-400/10 border-yellow-400/20 hover:border-yellow-400/40",
        titleKey: "certifications.coderhouse.title",
        descriptionKey: "certifications.coderhouse.description",
        date: "Jul 2023",
        hours: "27 semanas",
    },
    {
        emoji: "🖥️",
        institution: "Webexperto",
        color: "from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/40",
        titleKey: "certifications.webexperto.title",
        descriptionKey: "certifications.webexperto.description",
        date: "Dic 2023",
        hours: "200hs",
    },
];

export const Certifications = () => {
    const { t } = useCustomTranslation();

    return (
        <section
            className="w-full max-w-[1200px] mx-auto z-20 relative px-6 md:px-12 flex flex-col items-center justify-center"
            id="certifications"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 w-full max-w-[600px] mx-auto"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight transition-colors">
                    {t("certifications_section.title")}
                </h2>
                <p className="text-muted mt-4 transition-colors">
                    {t("certifications_section.subtitle")}
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: index * 0.12 }}
                        whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        className={`group flex flex-col gap-4 p-8 rounded-3xl bg-gradient-to-br ${cert.color} backdrop-blur-sm border shadow-sm hover:shadow-xl transition-all duration-500 cursor-default`}
                    >
                        {/* Top row */}
                        <div className="flex items-start justify-between">
                            <span className="text-4xl">{cert.emoji}</span>
                            <span className="text-xs font-bold text-muted tracking-widest uppercase bg-background/60 border border-border rounded-lg px-3 py-1">
                                {cert.date}
                            </span>
                        </div>

                        {/* Institution */}
                        <p className="text-xs font-bold tracking-widest text-muted uppercase">
                            {cert.institution}
                        </p>

                        {/* Title */}
                        <h3 className="text-base font-bold text-foreground leading-snug transition-colors">
                            {t(cert.titleKey)}
                        </h3>

                        {/* Description */}
                        <p className="text-muted text-sm leading-relaxed transition-colors flex-1">
                            {t(cert.descriptionKey)}
                        </p>

                        {/* Hours badge */}
                        {cert.hours && (
                            <div className="mt-auto pt-2 border-t border-border/50">
                                <span className="text-xs text-muted font-medium">
                                    ⏱ {cert.hours}
                                </span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
