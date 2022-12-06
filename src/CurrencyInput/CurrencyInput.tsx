import { Component, mergeProps } from "solid-js";
import { CurrencyProps } from "./currencyInput.types";
import { getLocaleConfig } from "../utils/intLocale";
import { CustomInput } from "../CustomInput/CustomInput";

export const CurrencyInput: Component<CurrencyProps> = (
  userProps: CurrencyProps
) => {
  const props = mergeProps(
    {
      label: "",
      isRequired: false,
      pattern: "^[0-9]+$",
      IntlConfig: { locale: "en-US", currency: "USD" },
      placeholder: "",
      value: "",
    },
    userProps
  );

  return (
    <label>
      <span>
        {props.label} {props.isRequired && "*"}
      </span>
      <CustomInput
        value={getLocaleConfig(props.IntlConfig).currencySymbol}
        placeholder={props.placeholder}
        intlConfig={getLocaleConfig(props.IntlConfig)}
      />
    </label>
  );
};
