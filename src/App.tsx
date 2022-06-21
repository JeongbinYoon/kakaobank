import React, { useEffect, useState } from "react";
import "./App.module.css";
import Deposit from "./deposit/deposit";
import End from "./end/end";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import Moim from "./moim/moim";
import Remittance from "./remittance/remittance";
import Sky from "./sky/sky";
import Weeks26 from "./weeks26/weeks26";
import Withdrawal from "./withdrawal/withdrawal";

function App() {
  // if (scrollY > 420) {
  // }
  return (
    <div className="App">
      <Header />
      <Main />
      <Withdrawal />
      <Deposit />
      <Moim />
      <Weeks26 />
      <Remittance />
      <Sky />
      <End />
      <Footer />
    </div>
  );
}

export default App;
