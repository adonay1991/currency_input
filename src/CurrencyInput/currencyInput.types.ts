

export type IntlConfig = {
  locale: string;
  currency?: string;
};

export type CurrencyProps = {
  label?: string;
  type: "number";
  isRequired?: boolean;
  id?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  intlConfig?: IntlConfig;
};
