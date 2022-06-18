import React from "react";
import styles from "./weeks26.module.css";

const Weeks26 = () => (
  <div className={styles.weeks26}>
    <div className={styles.container}>
      <div>
        <h2>
          함께 도전해서
          <br />
          재미있는 26주적금
        </h2>
        <p>
          26주동안 변화하는 재미에 빠져있는 사이
          <br />
          어느덧 만기 달성 경험을 맛보게 됩니다.
        </p>
        <button>26주적금 {`>`}</button>
      </div>
      <div className={styles.imgBox}>
        <img src="./main-26weeks.png" alt="26weeks" />
      </div>
    </div>
  </div>
);

export default Weeks26;
