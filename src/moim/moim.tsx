import React from "react";
import styles from "./moim.module.css";

const Moim = () => (
  <div className={styles.moim}>
    <div className={styles.imgBox}>
      <img src="./main-moim.png" alt="moimImg" />
    </div>
    <div>
      <h2>
        함께 쓰고 같이 보는
        <br />
        모임통장
      </h2>
      <p>
        카카오톡 친구를 바로 모임통장으로 초대하고
        <br />
        친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.
        <br />
        재미있는 메시지 카드로 회비 입금 요청도 해보세요.
      </p>
      <button>모임통장 {`>`}</button>
    </div>
  </div>
);

export default Moim;
