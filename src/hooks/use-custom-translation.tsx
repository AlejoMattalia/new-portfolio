import { useTranslation } from "react-i18next";

export const useCustomTranslation = () => {
  const { t, i18n } = useTranslation(["translation"]);
  return { t, i18n };
};
