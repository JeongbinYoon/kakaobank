import React, { useEffect } from "react";
import styles from "./withdrawal.module.css";

const Withdrawal = () => (
  <div className={styles.withdrawal}>
    <div className={styles.imgBox}>
      <img src="./main-withdrawal.png" alt="withdrawalImg" />
    </div>
    <div>
      <h2 className={styles.title}>
        모바일로 더 손쉬운
        <br />
        계좌개설, 간편한 이체
      </h2>

      <p className={styles.text}>
        인증서, OTP 없이 계좌 개설이 간편합니다.
        <br />
        여러 건의 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.
      </p>
      <button className={styles.btn}>카카오뱅크 입출금통장</button>
    </div>
  </div>
);

export default Withdrawal;
