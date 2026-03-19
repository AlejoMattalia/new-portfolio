import { motion } from "framer-motion";
import PhotoProfile from "@/assets/images/photoProfile.webp";
import Tilt from "react-parallax-tilt";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

export const ContainerOne = () => {
  const { t } = useCustomTranslation();

  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="w-[50%] h-full flex items-center justify-end gap-14"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.05}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        style={{
          width: "300px",
          borderRadius: "1.5rem",
          overflow: "hidden",
        }}
      >
        <img
          src={PhotoProfile}
          alt="Foto de perfil"
          className="w-full h-full block cursor-pointer"
        />
      </Tilt>

      <div className="h-full">
        <h1 className="text-white text-5xl font-bold">ALEJ</h1>

        <h2 className="text-white text-3xl font-bold mt-5">
          <span className="text-primary">{t("home.title.oneLetter")}</span>
          {t("home.title.one")}
        </h2>

        <p className="text-white mt-10 flex flex-col">
          <span>{t("home.text.first.one")}</span>
          <span>{t("home.text.first.two")}</span>
          <span>{t("home.text.first.three")}</span>
          <span>{t("home.text.first.four")}</span>
          <span>{t("home.text.first.five")}</span>
          <span className="mt-4">{t("home.text.first.six")}</span>
          <span> {t("home.text.first.seven")}</span>
          <span> {t("home.text.first.eight")}</span>
        </p>
      </div>
    </motion.div>
  );
};
