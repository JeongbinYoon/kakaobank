import React from "react";
import styles from "./remittance.module.css";

const Remittance = () => (
  <div className={styles.remittance}>
    <img className={styles.bg} src="./home_map.png" alt="bg" />
    <div className={styles.imgBox}>
      <img src="./main-foreignRemittance-new.png" alt="foreignRemittanceImg" />
    </div>
    <div>
      <h2>
        해외계좌송금과
        <br />
        WU빠른해외송금을
        <br />더 쉽고, 저렴하게
      </h2>
      <p>
        해외계좌송금이 가능한 22개국을 포함하여 <br /> 전세계 200여개국으로
        <br />
        WU빠른해외송금이 가능합니다.
      </p>
      <button>해외송금 {`>`}</button>
    </div>
  </div>
);

export default Remittance;
