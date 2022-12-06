import { IntlConfig } from "../CurrencyInput";

type LocaleConfig = {
  currencySymbol: string;
  prefix: string;
  suffix: string;
};

const defaultConfig: LocaleConfig = {
  currencySymbol: "",
  prefix: "",
  suffix: "",
};

/**
 * Get locale config from input or default
 */
export const getLocaleConfig = (intlConfig?: IntlConfig): LocaleConfig => {
  const { locale, currency } = intlConfig || {};
  const numberFormatter = locale
    ? new Intl.NumberFormat(
        locale,
        currency ? { currency, style: "currency" } : undefined
      )
    : new Intl.NumberFormat();

  return numberFormatter
    .formatToParts(1000.1)
    .reduce((prev, curr, i): LocaleConfig => {
      if (curr.type === "currency") {
        if (i === 0) {
          return { ...prev, currencySymbol: curr.value, prefix: curr.value };
        } else {
          return { ...prev, currencySymbol: curr.value, suffix: curr.value };
        }
      }
      return prev;
    }, defaultConfig);
};
