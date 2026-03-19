import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

export const NotFound = () => {
    const { t } = useCustomTranslation();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-zinc-100 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center"
            >
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-white/5 select-none"
                >
                    {t("notFound.title")}
                </motion.h1>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        {t("notFound.subtitle")}
                    </h2>
                    <p className="text-zinc-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
                        {t("notFound.message")}
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        {t("notFound.button")}
                    </Link>
                </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 opacity-20">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
        </div>
    );
};
