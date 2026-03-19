import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";
import { timelineFreelanceData, timelineUnderDependencyData } from "@/api/api";
import { Timeline } from "./Timeline";
import { CustomButtom } from "../common/CustomButtom";
import { redirectWhatsapp } from "@/utils/utils";

import { i18n } from "i18next";

const getExperienceDuration = (startDate: string, i18nextInst: i18n) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const isSpanish = i18nextInst.language === 'es';

  const yearStr = years > 0 ? `${years} ${isSpanish ? (years > 1 ? "años" : "año") : (years > 1 ? "years" : "year")}` : "";
  const monthStr = months > 0 ? `${months} ${isSpanish ? (months > 1 ? "meses" : "mes") : (months > 1 ? "months" : "month")}` : "";

  return [yearStr, monthStr].filter(Boolean).join(isSpanish ? " y " : " and ");
};

export const Experience = () => {
  const { t, i18n } = useCustomTranslation();

  const underDependencyDuration = getExperienceDuration("2024-04-01", i18n);
  const freelanceDuration = getExperienceDuration("2023-01-01", i18n);

  return (
    <section
      className="w-full max-w-[1200px] mx-auto z-20 relative mt-32 px-6 md:px-12"
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight transition-colors">{t("experience_section.title")}</h2>
        <p className="text-muted mt-4 max-w-[600px] mx-auto transition-colors">{t("experience_section.subtitle")}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* UNDER DEPENDENCY SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col flex-1"
        >
          <div className="mb-8 border-b border-border pb-4 transition-colors">
            <h3 className="text-2xl font-semibold text-foreground uppercase tracking-wider transition-colors">
              {t("experience_section.corporate")}
            </h3>
            <span className="text-sm font-medium text-muted mt-2 block tracking-wide transition-colors">
              {underDependencyDuration} {t("experience_section.duration_suffix")}
            </span>
          </div>
          <Timeline array={timelineUnderDependencyData} />
        </motion.div>

        {/* FREELANCE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col flex-1"
        >
          <div className="mb-8 border-b border-border pb-4 transition-colors">
            <h3 className="text-2xl font-semibold text-foreground uppercase tracking-wider transition-colors">
              {t("experience_section.freelance")}
            </h3>
            <span className="text-sm font-medium text-muted mt-2 block tracking-wide transition-colors">
              {freelanceDuration} {t("experience_section.duration_suffix")}
            </span>
          </div>
          <Timeline array={timelineFreelanceData} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full flex items-center justify-center mt-20"
      >
        <CustomButtom
          title={t("experience_section.button")}
          variant="outlined"
          handleClick={redirectWhatsapp}
        />
      </motion.div>
    </section>
  );
};
