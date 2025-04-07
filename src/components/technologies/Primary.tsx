import React3DLogo from "./ReactLogo3D";
import typescriptImg from "@/assets/images/typescript.webp";
import nextImage from "@/assets/images/next.webp";
import { BrilliantTitle } from "../common/BrilliantTitle";
import { ImageTooltip } from "../common/ImageTooltip";
import { arrayImagesReactLibrary } from "@/utils/arrays";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";

export const Primary = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm")); // 👈 Detecta si es sm o más

  return (
    <motion.section
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start w-full gap-10"
      initial={isSm ? { opacity: 0, y: 200 } : false} // 👈 Solo animación si sm o más
      whileInView={isSm ? { opacity: 1, y: 0 } : {}} // 👈 En xs no animamos
      viewport={{ once: true }}
      transition={isSm ? { duration: 1 } : {}} // 👈 Transición solo si hay animación
    >
      <div>
        <header className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-bold text-white">
            <BrilliantTitle title="ReactJS" />
          </h1>
          <React3DLogo />
        </header>

        <main className="flex items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-xl font-bold text-white">Typescript</h2>
            <img
              src={typescriptImg}
              alt=""
              className="w-[100px] sm:w-[120px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-xl font-bold text-white">NextJS</h2>
            <img src={nextImage} alt="" className="w-[100px] sm:w-[120px]" />
          </div>
        </main>
      </div>

      <div className="flex lg:flex-col items-center justify-center gap-2 mt-10 lg:max-h-[550px] w-[80%] max-w-[380px] lg:overflow-y-auto overflow-x-scroll lg:overflow-x-hidden thin-scrollbar lg:pt-60 pl-[350px] min-[450px]:pl-[320px] sm:pl-0 pb-2 sm:pb-0">
        {arrayImagesReactLibrary.map((item, index) => (
          <ImageTooltip
            key={index}
            image={item.image}
            title={item.title}
            size={isSm ? "60" : "50"}
            placement="right"
          />
        ))}
      </div>
    </motion.section>
  );
};
