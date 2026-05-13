import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";
import { downloadCV } from "@/utils/utils";
import { CustomButtom } from "../common/CustomButtom";
import { timelineUnderDependencyData, timelineFreelanceData } from "@/api/api";
import { arrayFrontend, arrayBackend, arrayInfra } from "@/utils/arrays";
import { useNavigate } from "react-router-dom";
import PhotoProfile from "@/assets/images/alejomattalia.jpeg";
import { GmailIcon } from "@/assets/icons/GmailIcon";
import { WhatsappIcon } from "@/assets/icons/WhatsappIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { LinkIcon } from "@/assets/icons/LinkIcon";

export const CV = () => {
  const { t } = useCustomTranslation();
  const navigate = useNavigate();

  const translateDate = (dateStr: string) => {
    if (!dateStr) return "";
    const parts = dateStr.split(" ");
    if (parts[0].startsWith("months.") || parts[0].startsWith("common.")) {
      const translatedMonth = t(parts[0]);
      return parts.length > 1 ? `${translatedMonth} ${parts[1]}` : translatedMonth;
    }
    return t(dateStr);
  };

  const certs = [
    {
      emoji: "🎓",
      institution: "Teclab",
      color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
      titleKey: "certifications.teclab.title",
      descriptionKey: "certifications.teclab.description",
      date: "Feb 2024",
    },
    {
      emoji: "⚛️",
      institution: "Coderhouse",
      color: "from-yellow-400/10 to-orange-400/10 border-yellow-400/20",
      titleKey: "certifications.coderhouse.title",
      descriptionKey: "certifications.coderhouse.description",
      date: "Jul 2023",
    },
    {
      emoji: "🖥️",
      institution: "Webexperto",
      color: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
      titleKey: "certifications.webexperto.title",
      descriptionKey: "certifications.webexperto.description",
      date: "Dic 2023",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-24 relative z-20">
      {/* HEADER SECTION */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-border transition-colors"
      >
        <div className="flex items-center gap-6">
          <img
            src={PhotoProfile}
            alt="Alejo Mattalia"
            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-3xl border border-border shadow-md grayscale-[20%]"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight transition-colors">
              Alejo <span className="text-muted">Mattalia</span>
            </h1>
            <p className="text-subtle text-lg md:text-xl font-medium mt-1 tracking-wide transition-colors">
              {t("home.title.twoLetter")} {t("home.title.three") || "FULLSTACK DEVELOPER"}
            </p>
            <span className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-muted w-fit border border-border">
              📍 {t("cv_page.location_full")}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <CustomButtom
            title={t("cv_page.download_pdf")}
            variant="contained"
            handleClick={downloadCV}
          />
          <CustomButtom
            title={t("cv_page.back_portfolio")}
            variant="outlined"
            handleClick={() => navigate("/")}
          />
        </div>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* LEFT & CENTER COLUMNS: PROFILE & EXPERIENCE */}
        <div className="lg:col-span-2 flex flex-col gap-12">
          {/* PROFESSIONAL PROFILE */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 bg-white dark:bg-zinc-900/40 border border-border rounded-3xl p-8 shadow-sm transition-colors"
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight border-b border-border pb-4 transition-colors">
              {t("cv_page.profile")}
            </h2>
            <p className="text-muted text-base leading-relaxed mt-2 transition-colors">
              {t("home.subtitle1")}
            </p>
            <p className="text-muted text-base leading-relaxed transition-colors">
              {t("home.subtitle2")}
            </p>
            <p className="text-muted text-base leading-relaxed transition-colors">
              {t("home.subtitle3")}
            </p>
          </motion.section>

          {/* WORK EXPERIENCE */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8 bg-white dark:bg-zinc-900/40 border border-border rounded-3xl p-8 shadow-sm transition-colors"
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight border-b border-border pb-4 transition-colors">
              {t("cv_page.experience")}
            </h2>

            {/* CORPORATE */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-subtle uppercase tracking-wider transition-colors">
                {t("cv_page.corporate")}
              </h3>
              <div className="flex flex-col gap-8 pl-4 border-l-2 border-muted/30">
                {timelineUnderDependencyData.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2 relative group">
                    <div className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-foreground" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg font-bold text-foreground transition-colors">{item.company}</h4>
                      <span className="text-xs font-bold text-muted uppercase bg-zinc-100 dark:bg-zinc-800/60 border border-border px-2.5 py-1 rounded-lg w-fit">
                        {translateDate(item.start)} - {translateDate(item.end)}
                      </span>
                    </div>
                    <p className="text-subtle font-medium text-sm transition-colors">{t(item.role)}</p>
                    <p className="text-muted text-sm leading-relaxed mt-1 transition-colors">{t(item.description)}</p>
                    <div className="flex gap-2 flex-wrap mt-2">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 text-xs font-medium text-muted bg-zinc-100 dark:bg-zinc-800/40 border border-border rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FREELANCE */}
            <div className="flex flex-col gap-6 mt-6 pt-6 border-t border-border/50">
              <h3 className="text-lg font-semibold text-subtle uppercase tracking-wider transition-colors">
                {t("cv_page.freelance")}
              </h3>
              <div className="flex flex-col gap-8 pl-4 border-l-2 border-muted/30">
                {timelineFreelanceData.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2 relative group">
                    <div className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-foreground" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg font-bold text-foreground transition-colors">{t(item.role)}</h4>
                      <span className="text-xs font-bold text-muted uppercase bg-zinc-100 dark:bg-zinc-800/60 border border-border px-2.5 py-1 rounded-lg w-fit">
                        {translateDate(item.start)} - {translateDate(item.end)}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mt-1 transition-colors">{t(item.description)}</p>
                    <div className="flex gap-2 flex-wrap mt-2">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 text-xs font-medium text-muted bg-zinc-100 dark:bg-zinc-800/40 border border-border rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* RIGHT COLUMN: CONTACT, SKILLS, EDUCATION, LANGUAGES */}
        <div className="flex flex-col gap-12">
          {/* CONTACT INFO */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col gap-6 bg-white dark:bg-zinc-900/40 border border-border rounded-3xl p-8 shadow-sm transition-colors"
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight border-b border-border pb-4 transition-colors">
              {t("cv_page.contact_title")}
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:alejoomattalia@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted hover:text-foreground transition-colors group"
              >
                <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-border text-foreground group-hover:scale-105 transition-transform">
                  <GmailIcon color="currentColor" width="20px" height="20px" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs text-subtle font-medium uppercase tracking-wider">{t("cv_page.label_email")}</span>
                  <span className="text-sm font-semibold truncate text-foreground">{t("cv_page.email")}</span>
                </div>
              </a>

              <a
                href="https://wa.me/5493468530707"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted hover:text-foreground transition-colors group"
              >
                <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-border text-foreground group-hover:scale-105 transition-transform">
                  <WhatsappIcon color="currentColor" width="20px" height="20px" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs text-subtle font-medium uppercase tracking-wider">{t("cv_page.label_phone")}</span>
                  <span className="text-sm font-semibold truncate text-foreground">{t("cv_page.phone")}</span>
                </div>
              </a>

              <a
                href="https://alejomattalia.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted hover:text-foreground transition-colors group"
              >
                <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-border text-foreground group-hover:scale-105 transition-transform">
                  <LinkIcon color="currentColor" width="20px" height="20px" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs text-subtle font-medium uppercase tracking-wider">{t("cv_page.label_website")}</span>
                  <span className="text-sm font-semibold truncate text-foreground">{t("cv_page.website")}</span>
                </div>
              </a>

              <a
                href="https://github.com/AlejoMattalia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted hover:text-foreground transition-colors group"
              >
                <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-border text-foreground group-hover:scale-105 transition-transform">
                  <GithubIcon color="currentColor" width="20px" height="20px" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs text-subtle font-medium uppercase tracking-wider">GitHub</span>
                  <span className="text-sm font-semibold truncate text-foreground">{t("cv_page.github")}</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/alejo-mattalia/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted hover:text-foreground transition-colors group"
              >
                <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-border text-foreground group-hover:scale-105 transition-transform">
                  <LinkedinIcon color="currentColor" width="20px" height="20px" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs text-subtle font-medium uppercase tracking-wider">LinkedIn</span>
                  <span className="text-sm font-semibold truncate text-foreground">{t("cv_page.linkedin")}</span>
                </div>
              </a>
            </div>
          </motion.section>

          {/* TECHNICAL SKILLS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6 bg-white dark:bg-zinc-900/40 border border-border rounded-3xl p-8 shadow-sm transition-colors"
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight border-b border-border pb-4 transition-colors">
              {t("cv_page.skills")}
            </h2>

            {/* FRONTEND */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-subtle uppercase tracking-wider transition-colors">
                {t("technologies_section.frontend_ecosystem")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {arrayFrontend.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/30 border border-border px-3 py-1.5 rounded-xl">
                    <img src={tech.image} alt={tech.title} className="w-4 h-4 object-contain" />
                    <span className="text-xs font-semibold text-foreground transition-colors">{tech.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div className="flex flex-col gap-3 pt-3 border-t border-border/50">
              <h3 className="text-sm font-semibold text-subtle uppercase tracking-wider transition-colors">
                {t("technologies_section.backend_ecosystem")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {arrayBackend.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/30 border border-border px-3 py-1.5 rounded-xl">
                    <img src={tech.image} alt={tech.title} className="w-4 h-4 object-contain" />
                    <span className="text-xs font-semibold text-foreground transition-colors">{tech.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* INFRASTRUCTURE & TOOLS */}
            <div className="flex flex-col gap-3 pt-3 border-t border-border/50">
              <h3 className="text-sm font-semibold text-subtle uppercase tracking-wider transition-colors">
                {t("technologies_section.infra_tools")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {arrayInfra.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/30 border border-border px-3 py-1.5 rounded-xl">
                    <img src={tech.image} alt={tech.title} className="w-4 h-4 object-contain" />
                    <span className="text-xs font-semibold text-foreground transition-colors">{tech.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* EDUCATION */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-6 bg-white dark:bg-zinc-900/40 border border-border rounded-3xl p-8 shadow-sm transition-colors"
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight border-b border-border pb-4 transition-colors">
              {t("cv_page.education")}
            </h2>
            <div className="flex flex-col gap-6">
              {certs.map((cert, idx) => (
                <div key={idx} className="flex flex-col gap-1 pb-4 border-b border-border/50 last:border-none last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">{cert.institution}</span>
                    <span className="text-xs font-bold text-muted bg-zinc-100 dark:bg-zinc-800/60 border border-border px-2 py-0.5 rounded-md">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug mt-1 transition-colors">{t(cert.titleKey)}</h3>
                  <p className="text-muted text-xs leading-relaxed mt-1 transition-colors">{t(cert.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* LANGUAGES */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 bg-white dark:bg-zinc-900/40 border border-border rounded-3xl p-8 shadow-sm transition-colors"
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight border-b border-border pb-4 transition-colors">
              {t("cv_page.languages")}
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/20 border border-border rounded-2xl">
                <span className="text-sm font-semibold text-foreground">🇦🇷 {t("cv_page.languages_list.spanish")}</span>
                <span className="text-xs font-bold text-muted bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg border border-border">C2</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/20 border border-border rounded-2xl">
                <span className="text-sm font-semibold text-foreground">🇺🇸 {t("cv_page.languages_list.english")}</span>
                <span className="text-xs font-bold text-muted bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg border border-border">B2</span>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};
