import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { GmailIcon } from "@/assets/icons/GmailIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { WhatsappIcon } from "@/assets/icons/WhatsappIcon";
import { BrilliantTitle } from "@/components/common/BrilliantTitle";
import { CustomButtom } from "@/components/common/CustomButtom";
import { Icon } from "@/components/common/Icon";
import { downloadCV, redirectWhatsapp } from "@/utils/utils";
import { motion } from "framer-motion";
import { useCustomTranslation } from "@/hooks/use-custom-translation";

export const Info = () => {
  const { t } = useCustomTranslation();

  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex flex-col items-start justify-center w-full max-w-[320px]"
    >
      <h1 className="text-foreground text-4xl font-bold inline-block transition-colors">
        ALEJO <BrilliantTitle title="MATTALIA" />
      </h1>

      <h2 className="text-subtle text-xl font-bold mt-1 transition-colors">
        {t("home.title.twoLetter")} {t("home.title.three") || "FULLSTACK DEVELOPER"}
      </h2>

      <div className="text-muted text-sm mt-5 space-y-4 transition-colors">
        <p>{t("home.subtitle1")}</p>
        <p>{t("home.subtitle2")}</p>
        <p>{t("home.subtitle3")}</p>
      </div>

      <div className="flex gap-4 mt-8 w-full">
        <CustomButtom
          title={t("home.buttons.download")}
          variant="outlined"
          handleClick={downloadCV}
          size="small"
        />

        <CustomButtom
          title={t("home.buttons.contact")}
          variant="contained"
          handleClick={redirectWhatsapp}
          size="small"
        />
      </div>

      <footer className="flex gap-3 mt-10 flex-wrap">
        <Icon
          redirect="https://www.linkedin.com/in/alejo-mattalia/"
          icon={<LinkedinIcon color="currentColor" width="24px" height="24px" />}
          title="Linkedin"
        />

        <Icon
          redirect="https://github.com/AlejoMattalia"
          icon={<GithubIcon color="currentColor" width="24px" height="24px" />}
          title="Github"
        />

        <Icon
          redirect="https://wa.me/5493468530707"
          icon={<WhatsappIcon color="currentColor" width="24px" height="24px" />}
          title="Whatsapp"
        />

        <Icon
          redirect="mailto:alejoomattalia@gmail.com"
          icon={<GmailIcon color="currentColor" width="24px" height="24px" />}
          title="Gmail"
        />

        <Icon
          redirect="https://www.instagram.com/alejomattalia/"
          icon={<InstagramIcon color="currentColor" width="24px" height="24px" />}
          title="Instagram"
        />

        <Icon
          redirect="https://www.facebook.com/alejomattalia/"
          icon={<FacebookIcon color="currentColor" width="24px" height="24px" />}
          title="Facebook"
        />
      </footer>
    </motion.div>
  );
};
