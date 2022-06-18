import React from "react";
import styles from "./deposit.module.css";

const Deposit = () => (
  <div className={styles.deposit}>
    <div className={styles.container}>
      <div>
        <h2>
          우대조건 없이
          <br />
          합리적인 예금과 적금
        </h2>
        <p>
          기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?
          <br />
          카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고
          합리적입니다
        </p>
        <div className={styles.btns}>
          <button>정기예금 {`>`}</button>
          <button>자유적금 {`>`}</button>
        </div>
        <img className={styles.img2} src="./main-savings-money.png" alt="" />
      </div>
      <div className={styles.imgBox}>
        <img src="./main-savings.png" alt="main-savings" />
      </div>
    </div>
  </div>
);

export default Deposit;
