import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useCustomTranslation } from "@/hooks/use-custom-translation";
import PhotoProfile from "@/assets/images/photoProfile.webp";
import { CustomButtom } from "../common/CustomButtom";
import { Icon } from "../common/Icon";
import { downloadCV, redirectWhatsapp } from "@/utils/utils";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { WhatsappIcon } from "@/assets/icons/WhatsappIcon";
import { GmailIcon } from "@/assets/icons/GmailIcon";

export const Home = () => {
  const t = useCustomTranslation();

  return (
    <section className="relative z-10 w-full min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24 px-6 md:px-12 xl:px-32 mt-20 lg:mt-0 py-16 lg:py-40">

      {/* TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-start justify-center w-full lg:w-1/2 max-w-[600px]"
      >
        <div className="flex flex-col mb-2">
          <h1 className="text-white text-5xl sm:text-7xl font-bold tracking-tighter leading-none">
            ALEJO <span className="text-zinc-500">MATTALIA</span>
          </h1>
          <h2 className="text-zinc-300 text-xl md:text-2xl font-medium mt-4 tracking-wide">
            {t("home.title.twoLetter")} {t("home.title.three") || "FRONTEND DEVELOPER"}
          </h2>
        </div>

        <p className="text-zinc-400 text-base md:text-lg mt-6 leading-relaxed max-w-[450px]">
          {t("home.text.first.one")} {t("home.text.first.two")} {t("home.text.first.three")} {t("home.text.first.four")} {t("home.text.first.five")} {t("home.text.first.six")} {t("home.text.first.seven")} {t("home.text.first.eight")}
        </p>

        <p className="text-zinc-400 text-base md:text-lg mt-4 leading-relaxed max-w-[450px]">
          {t("home.text.second.one")} {t("home.text.second.two")} {t("home.text.second.three")} {t("home.text.second.four")} {t("home.text.second.five")} {t("home.text.second.six")} {t("home.text.second.seven")} {t("home.text.second.eight")}
        </p>

        <div className="flex gap-4 mt-8">
          <CustomButtom
            title="Download CV"
            variant="contained"
            handleClick={downloadCV}
          />
          <CustomButtom
            title="Contact Me"
            variant="outlined"
            handleClick={redirectWhatsapp}
          />
        </div>

        <div className="flex gap-4 mt-12 items-center">
          <Icon redirect="https://github.com/AlejoMattalia" icon={<GithubIcon color="#a1a1aa" width="24px" height="24px" />} title="Github" />
          <Icon redirect="https://www.linkedin.com/in/alejo-mattalia/" icon={<LinkedinIcon color="#a1a1aa" width="24px" height="24px" />} title="Linkedin" />
          <Icon redirect="https://wa.me/5493468530707" icon={<WhatsappIcon color="#a1a1aa" width="24px" height="24px" />} title="Whatsapp" />
          <Icon redirect="mailto:alejoomattalia@gmail.com" icon={<GmailIcon color="#a1a1aa" width="24px" height="24px" />} title="Gmail" />
        </div>
      </motion.div>

      {/* IMAGE CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <Tilt
          glareEnable={false}
          scale={1.02}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          style={{ width: "100%", maxWidth: "420px", borderRadius: "2rem", overflow: "hidden" }}
        >
          <img
            src={PhotoProfile}
            alt="Foto de perfil"
            className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
        </Tilt>
      </motion.div>

    </section>
  );
};
