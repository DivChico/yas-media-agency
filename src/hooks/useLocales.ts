import { en, ar } from 'src/locales/translations';
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

export function useLocales() {
  const { themeDirection } = useSettingsContext();

  const isArabic = themeDirection === 'rtl';
  const currentLang = isArabic ? ar : en;
  const langCode = isArabic ? 'ar' : 'en';

  const t = (key: keyof typeof en): string => currentLang[key] || en[key] || key;

  return {
    t,
    currentLang,
    isArabic,
    langCode,
  };
}
