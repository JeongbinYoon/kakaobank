import React from "react";
import styles from "./sky.module.css";

const Sky = () => (
  <div className={styles.sky}>
    <h2>복잡한 서류 제출을 간편하게, 내가 원하는 시간에</h2>
    <p>
      이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수 있습니다.
    </p>
    <div className={styles.btns}>
      <button>마이너스 통장대출 {`>`}</button>
      <button>신용대출 {`>`}</button>
      <button>개인사업자 대출 {`>`}</button>
      <button>전월세보증금 대출 {`>`}</button>
    </div>
    <img src="./main-loan.png" alt="" />
  </div>
);

export default Sky;
