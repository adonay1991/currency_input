import type { Component } from "solid-js";
import { CurrencyInput } from "./CurrencyInput";

import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <CurrencyInput
          isRequired={false}
          type={"text"}
          intlConfig={{locale: "en-US", currency: "USD"}}
        />
      </header>
    </div>
  );
};

export default App;
