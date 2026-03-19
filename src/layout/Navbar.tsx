import { useEffect, useState } from "react";
import { RedirectText } from "../components/common/RedirectText";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

export const Navbar = () => {
  const t = useCustomTranslation();
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

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden lg:flex fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "py-4 bg-[#09090b]/80 backdrop-blur-xl"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-12 flex items-center justify-between">
          <div className="text-xl font-bold text-white tracking-tighter">
            AM<span className="text-zinc-500">.</span>
          </div>

          <nav className="flex items-center gap-8">
            <RedirectText text={t("navbar.technologies")} redirect="technologies" />
            <RedirectText text={t("navbar.experience")} redirect="experience" />
            <RedirectText text={t("navbar.projects")} redirect="projects" />
            <RedirectText text={t("navbar.contact")} redirect="contact" />
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navbar */}
      <header
        className={`fixed top-0 w-full z-50 lg:hidden transition-all duration-500 ${scrolled || openMenu
          ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/50"
          : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-white tracking-tighter relative z-50">
            AM<span className="text-zinc-500">.</span>
          </div>

          <button
            onClick={handleOpenMenu}
            className="relative z-50 p-2 -mr-2 text-white hover:text-zinc-300 transition-colors"
            aria-label="Toggle menu"
          >
            {openMenu ? (
              <CloseIcon width="28px" height="28px" color="currentColor" />
            ) : (
              <MenuIcon width="28px" height="28px" color="currentColor" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 min-h-screen bg-[#09090b]/95 z-40 flex flex-col pt-24 px-6"
            >
              <nav className="flex flex-col gap-6 mt-8">
                <RedirectText
                  text={t("navbar.technologies")}
                  redirect="technologies"
                  setOpenMenu={setOpenMenu}
                />
                <RedirectText
                  text={t("navbar.experience")}
                  redirect="experience"
                  setOpenMenu={setOpenMenu}
                />
                <RedirectText
                  text={t("navbar.projects")}
                  redirect="projects"
                  setOpenMenu={setOpenMenu}
                />
                <RedirectText
                  text={t("navbar.contact")}
                  redirect="contact"
                  setOpenMenu={setOpenMenu}
                />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
