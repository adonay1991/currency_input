export interface IntlConfig extends HTMLInputElement{
  locale?: string;
  currency?: string;
}

export type CurrencyProps = IntlConfig & {
  label?: string;
  type: "text" | 'number';
  pattern?: string,
  isRequired?: boolean;
  id?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  intlConfig?: IntlConfig ;
};
