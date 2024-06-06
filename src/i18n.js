import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 引入翻译文件
import translationEN from "./locales/en_US/translation.json";
import translationZHS from "./locales/zh_CN/translation.json";
import translationZHT from "./locales/zh_TW/translation.json";

// 配置翻译资源
const resources = {
  en_US: {
    translation: translationEN,
  },
  zh_TW: {
    translation: translationZHT,
  },
  zh_CN: {
    translation: translationZHS,
  },
};

i18n
  .use(initReactI18next) // 绑定 react-i18next
  .init({
    resources,
    lng: "en", // 默认语言
    interpolation: {
      escapeValue: false, // React 已经默认转义防止 XSS
    },
  });

export default i18n;
