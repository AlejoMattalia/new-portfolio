import { ArrowUp } from "@/assets/icons/ArrowUp";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ButtonScrollTop = () => {
  const [isHovered, setIsHovered] = useState(false);
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`fixed bottom-3 sm:bottom-5 right-3 sm:right-5 cursor-pointer w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] flex items-center justify-center rounded-full z-50 transition-colors duration-300 ${
            isHovered ? "bg-white" : "bg-primary"
          }`}
        >
          <ArrowUp
            width={40}
            height={40}
            color={isHovered ? "#8e44ad" : "#ffffff"}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
