import { ArrowUp } from "@/assets/icons/ArrowUp";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ButtonScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setShowButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.3 }}
          onClick={handleScroll}
          className="group fixed bottom-6 sm:bottom-10 right-6 sm:right-10 cursor-pointer w-12 h-12 flex items-center justify-center rounded-full z-50 transition-all duration-300 bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 text-zinc-400 hover:bg-white hover:text-black hover:border-white shadow-lg"
        >
          <ArrowUp
            width={24}
            height={24}
            color="currentColor"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
