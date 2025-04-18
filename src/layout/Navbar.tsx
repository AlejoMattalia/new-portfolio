import { useEffect, useState } from "react";
import { RedirectText } from "../components/common/RedirectText";
import { Icon } from "../components/common/Icon";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "@/assets/icons/CloseIcon";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
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
      <section
        className={`hidden fixed z-50 lg:flex items-center justify-center w-full p-4 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-black/30" : ""
        }`}
      >
        <nav
          className={`border border-primary rounded-xl flex transition-all duration-300 ${
            scrolled ? "shadow-lg bg-black/60 backdrop-blur-sm" : ""
          }`}
        >
          <RedirectText text="TECNOLOGÍAS" redirect="technologies" />
          <RedirectText text="EXPERIENCIA" redirect="experience" />
          <RedirectText text="PROYECTOS" redirect="projects" />
          <RedirectText text="CONTACTO" redirect="contact" />
        </nav>
      </section>

      {/* Mobile Navbar */}
      <section className="flex items-center justify-center w-full p-4 lg:hidden">
        <div
          className={`fixed h-24 z-50 w-full flex items-center justify-center ${
            scrolled ? "backdrop-blur-md bg-black/30" : ""
          }`}
        >
          <div className="relative top-4">
            <Icon
              onClick={handleOpenMenu}
              icon={
                openMenu ? (
                  <CloseIcon width="40px" height="40px" color="#fff" />
                ) : (
                  <MenuIcon width="40px" height="40px" color="#fff" />
                )
              }
              sizeBackground="40px"
            />
          </div>
        </div>

        {/* Overlay con AnimatePresence */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-screen bg-black/80 z-30"
              onClick={handleOpenMenu}
            >
              <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-black w-full p-6 flex flex-col items-start border-b-2 border-gray-500 rounded-b-4xl text-white pt-16 z-40"
                onClick={(e) => e.stopPropagation()}
              >
                <RedirectText
                  text="TECNOLOGÍAS"
                  redirect="technologies"
                  setOpenMenu={setOpenMenu}
                />
                <RedirectText
                  text="EXPERIENCIA"
                  redirect="experience"
                  setOpenMenu={setOpenMenu}
                />
                <RedirectText
                  text="PROYECTOS"
                  redirect="projects"
                  setOpenMenu={setOpenMenu}
                />
                <RedirectText
                  text="CONTACTO"
                  redirect="contact"
                  setOpenMenu={setOpenMenu}
                />
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};
