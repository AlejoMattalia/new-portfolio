import { useEffect, useState } from "react";
import { RedirectText } from "../components/common/RedirectText";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { useCustomTranslation } from "@/hooks/use-custom-translation";
import { useTranslation } from "react-i18next";



export const Navbar = () => {
  const { t } = useCustomTranslation();
  const { i18n } = useTranslation();


  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    document.body.style.overflow = openMenu ? "auto" : "hidden";
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(nextLang);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden xl:flex fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-12 flex items-center justify-between">
          <div className="text-xl font-bold text-foreground tracking-tighter cursor-default transition-colors">
            AM<span className="text-muted">.</span>
          </div>

          <div className="flex items-center gap-12">
            <nav className="flex items-center gap-8">
              <RedirectText text={t("navbar.timeline")} redirect="timeline" />
              <RedirectText text={t("navbar.services")} redirect="services" />
              <RedirectText text={t("navbar.technologies")} redirect="technologies" />
              <RedirectText text={t("navbar.experience")} redirect="experience" />
              <RedirectText text={t("navbar.projects")} redirect="projects" />
              <RedirectText text={t("navbar.certifications")} redirect="certifications" />
              <RedirectText text={t("navbar.process")} redirect="process" />
              <RedirectText text={t("navbar.contact")} redirect="contact" />
            </nav>

            <div className="flex items-center gap-4">

              <button
                onClick={toggleLanguage}
                className="text-xs font-bold text-muted hover:text-foreground transition-all uppercase tracking-widest cursor-pointer border border-border rounded-lg px-2 py-1.5 h-[34px] flex items-center justify-center min-w-[36px]"
              >
                {i18n.language === "es" ? "EN" : "ES"}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navbar */}
      <header
        className={`fixed top-0 w-full z-50 xl:hidden transition-all duration-500 ${scrolled || openMenu
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-foreground tracking-tighter relative z-50 cursor-default transition-colors">
            AM<span className="text-muted">.</span>
          </div>

          <div className="flex items-center gap-4 relative z-50">

            <button
              onClick={toggleLanguage}
              className="text-xs font-bold text-muted hover:text-foreground transition-all uppercase tracking-widest cursor-pointer border border-border rounded-lg px-2 py-1.5 h-[38px] flex items-center justify-center min-w-[40px]"
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={handleOpenMenu}
              className="p-2 -mr-2 text-foreground hover:text-zinc-500 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {openMenu ? (
                <CloseIcon width="28px" height="28px" color="currentColor" />
              ) : (
                <MenuIcon width="28px" height="28px" color="currentColor" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 min-h-screen bg-background/95 z-40 flex flex-col pt-24 px-6"
            >
              <nav className="flex flex-col gap-6 mt-8">
                <RedirectText text={t("navbar.timeline")} redirect="timeline" setOpenMenu={setOpenMenu} />
                <RedirectText text={t("navbar.services")} redirect="services" setOpenMenu={setOpenMenu} />

                <RedirectText text={t("navbar.technologies")} redirect="technologies" setOpenMenu={setOpenMenu} />
                <RedirectText text={t("navbar.experience")} redirect="experience" setOpenMenu={setOpenMenu} />
                <RedirectText text={t("navbar.projects")} redirect="projects" setOpenMenu={setOpenMenu} />
                <RedirectText text={t("navbar.certifications")} redirect="certifications" setOpenMenu={setOpenMenu} />
                <RedirectText text={t("navbar.process")} redirect="process" setOpenMenu={setOpenMenu} />
                <RedirectText text={t("navbar.contact")} redirect="contact" setOpenMenu={setOpenMenu} />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
