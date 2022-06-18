import React from "react";
import "./App.module.css";
import Deposit from "./deposit/deposit";
import Header from "./header/header";
import Main from "./main/main";
import Moim from "./moim/moim";
import Remittance from "./remittance/remittance";
import Weeks26 from "./weeks26/weeks26";
import Withdrawal from "./withdrawal/withdrawal";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Withdrawal />
      <Deposit />
      <Moim />
      <Weeks26 />
      <Remittance />
    </div>
  );
}

export default App;
