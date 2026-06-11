import { useLanguage } from "./useLanguage";
import { translations } from "../constants/translations";

export function useTranslation() {
  const { language } = useLanguage();

  return translations[language];
}
