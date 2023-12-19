var en = require("./translations.en.json");
var fi = require("./translations.fi.json");

const i18n = {
  translations: {
    en: en.i18n,
    fi: fi.i18n,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;