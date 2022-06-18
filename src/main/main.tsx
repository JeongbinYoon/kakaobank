import { url } from "inspector";
import React from "react";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div
      className={styles.main}
      style={{ background: "url(./main-bg3.png)", backgroundSize: "contain" }}
    >
      <h2 className={styles.text1}>
        이미 모두의 은행
        <br />
        지금은 카카오뱅크
      </h2>
      <p className={styles.text2}>
        한 사람, 한 사람을 위해 시작한 은행이
        <br /> 더 많은 사람들이 찾는 모두의 은행이 되었습니다.
      </p>
      <a className={styles.text3} href="#">
        브랜드 캠페인 보러가기
      </a>
      <button className={styles.btn1}>Google Play</button>
      <button className={styles.btn2}>Apple Store</button>
    </div>
  );
};

export default Main;
