import { arrayOtherTechnologies } from "@/utils/arrays";
import { motion } from "framer-motion";
import { ImageTooltip } from "../common/ImageTooltip";
import { useMediaQuery, useTheme } from "@mui/material";

export const Secondary = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm")); // 👈 Detectamos si es sm o mayor

  return (
    <motion.section
      className="flex flex-col items-center justify-center w-full gap-10 borde px-10 lg:px-0"
      initial={isSm ? { opacity: 0, y: 200 } : false} // 👈 Solo animación si sm o más
      whileInView={isSm ? { opacity: 1, y: 0 } : {}} // 👈 Evitamos efecto en xs
      viewport={{ once: true }}
      transition={isSm ? { delay: isLg ? 2 : 0, duration: 1 } : {}} // 👈 Solo transiciones si sm o más
    >
      <p className="text-2xl font-bold text-white">Otras tecnologías</p>

      <main className="flex items-center justify-center gap-10 w-full flex-wrap">
        {arrayOtherTechnologies.map((item, index) => (
          <ImageTooltip
            key={index}
            image={item.image}
            title={item.title}
            size={isLg ? "100" : "70"}
            placement="top"
          />
        ))}
      </main>
    </motion.section>
  );
};
