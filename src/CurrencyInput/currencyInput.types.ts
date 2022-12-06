import { JSX } from "solid-js";

export type IntlConfig = {
  locale?: string;
  currency?: string;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

export type CurrencyProps = {
  label?: string;
  type?: "text" | "number";
  pattern?: string;
  value?: string;
  isRequired?: boolean;
  id?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  placeholder?: string;
  intlConfig?: IntlConfig;
};
