import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

interface Service {
    icon: string;
    titleKey: string;
    descriptionKey: string;
}

const services: Service[] = [
    {
        icon: "💻",
        titleKey: "services_section.web_dev.title",
        descriptionKey: "services_section.web_dev.description",
    },
    {
        icon: "🛒",
        titleKey: "services_section.ecommerce.title",
        descriptionKey: "services_section.ecommerce.description",
    },
    {
        icon: "📱",
        titleKey: "services_section.mobile.title",
        descriptionKey: "services_section.mobile.description",
    },
    {
        icon: "🔧",
        titleKey: "services_section.api.title",
        descriptionKey: "services_section.api.description",
    },
    {
        icon: "☁️",
        titleKey: "services_section.cloud.title",
        descriptionKey: "services_section.cloud.description",
    },
    {
        icon: "🎨",
        titleKey: "services_section.ui.title",
        descriptionKey: "services_section.ui.description",
    },
];

export const Services = () => {
    const { t } = useCustomTranslation();

    return (
        <section
            className="w-full max-w-[1200px] mx-auto z-20 relative px-6 md:px-12 flex flex-col items-center justify-center"
            id="services"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 w-full max-w-[600px] mx-auto"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight transition-colors">
                    {t("services_section.title")}
                </h2>
                <p className="text-muted mt-4 transition-colors">
                    {t("services_section.subtitle")}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        className="group flex flex-col gap-4 p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/20 backdrop-blur-sm border border-border hover:border-foreground/20 shadow-sm hover:shadow-xl transition-all duration-500 cursor-default"
                    >
                        <div className="text-4xl">{service.icon}</div>
                        <h3 className="text-lg font-bold text-foreground transition-colors">
                            {t(service.titleKey)}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed transition-colors">
                            {t(service.descriptionKey)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
