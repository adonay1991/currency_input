import type { Component } from "solid-js";
import { CurrencyInput } from "./CurrencyInput";

import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <CurrencyInput
          isRequired={true}
          label={"Insert Currency"}
          type={"number"}
        />
      </header>
    </div>
  );
};

export default App;
