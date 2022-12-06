import { Component } from "solid-js";
import { CurrencyProps } from "../CurrencyInput";

export const CustomInput: Component<CurrencyProps> = (
  userProps: CurrencyProps
) => {
  return <input {...userProps} />;
};
