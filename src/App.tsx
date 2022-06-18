import React from "react";
import "./App.module.css";
import Deposit from "./deposit/deposit";
import Header from "./header/header";
import Main from "./main/main";
import Moim from "./moim/moim";
import Withdrawal from "./withdrawal/withdrawal";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Withdrawal />
      <Deposit />
      <Moim />
    </div>
  );
}

export default App;
