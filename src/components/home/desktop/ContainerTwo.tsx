import { BrilliantTitle } from "@/components/common/BrilliantTitle";
import { useCustomTranslation } from "@/hooks/use-custom-translation";
import { motion } from "framer-motion";

export const ContainerTwo = () => {
  const { t } = useCustomTranslation();

  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="w-[50%] h-full flex flex-col items-start justify-start relative top-[1px] right-[1px]"
    >
      <h1 className="text-white text-5xl font-bold inline-block relative right-2 bottom-0.5">
        O <BrilliantTitle title="MATTALIA" />
      </h1>

      <h2 className="text-white text-3xl font-bold mt-5 relative right-1 bottom-0.5">
        {t("home.title.two")}{" "}
        <span className="text-primary">{t("home.title.twoLetter")}</span>
        {t("home.title.three")}
      </h2>

      <p className="text-white mt-9.5 flex flex-col">
        <span className="relative right-[5px]">
          {t("home.text.second.one")}
        </span>
        <span>{t("home.text.second.two")}</span>
        <span className="relative right-[3px]">
          {t("home.text.second.three")}
        </span>
        <span className="relative right-[5px]">
          {t("home.text.second.four")}
        </span>
        <span className="relative left-[1px]">
          {t("home.text.second.five")}
        </span>
        <span className="mt-4 relative right-[4px]">
          {t("home.text.second.six")}{" "}
        </span>
        <span className="relative right-[1px]">
          {t("home.text.second.seven")}
        </span>
        <span className="relative right-[8px]">
          {t("home.text.second.eight")}
        </span>
      </p>
    </motion.div>
  );
};
