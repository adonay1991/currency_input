import { Component, mergeProps } from "solid-js";
import { CurrencyProps } from "./currencyInput.types";
import { getLocaleConfig } from "../utils/intLocale";

export const CurrencyInput: Component<CurrencyProps> = (userProps) => {
  const props = mergeProps(
    {
      label: "",
      type: "text",
      isRequired: false,
      pattern: "^[0-9]+$",
      IntlConfig: { locale: "en-US", currency: "USD" },
    },
    userProps
  );

  console.log(getLocaleConfig(props.IntlConfig));
  return (
    <label>
      {/*<span>*/}
      {/*  {props.label} {props.isRequired && "*"}*/}
      {/*</span>*/}
      <input
        pattern={props.pattern}
        value={getLocaleConfig(props.IntlConfig).currencySymbol}
        type={props.type}
        required={props.isRequired}
        IntlConfig={getLocaleConfig(props.IntlConfig)}
      />
    </label>
  );
};
