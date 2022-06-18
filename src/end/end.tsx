import React from "react";
import styles from "./end.module.css";

const End = () => (
  <div className={styles.end}>
    <h2>
      IT 기술로 카카오뱅크를
      <br />
      만들어 갑니다.
    </h2>
    <div className={styles.line}></div>
    <img src="./home_it.png" alt="home_itImg" />

    <div className={styles.items}>
      <div className={styles.item1}>
        <h3>간결하고, 유려하게</h3>
        <p>
          작은 모바일 화면에 적합하도록 복잡함을 덜어낸 유려하고 친화적인 UX
        </p>
      </div>
      <div className={styles.item2}>
        <h3>간편한 인증, 철저한 보안</h3>
        <p>
          지문, 비밀번호로 간편한 인증 IT 기술의 강력한 보안 검증과 데이터
          암호화
        </p>
      </div>
      <div className={styles.item3}>
        <h3>Mobile First, One App</h3>
        <p>
          모바일에서 뱅킹이 더 쉽고 편리하게 여러 앱을 설치할 필요 없이 하나의
          앱으로
        </p>
      </div>
    </div>
  </div>
);

export default End;
