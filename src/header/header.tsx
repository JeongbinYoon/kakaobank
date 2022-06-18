import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src="./logo_black.svg" alt="logo" />
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">은행소개</a>
            </li>
            <li>
              <a href="#">IR투자정보</a>
            </li>
            <li>
              <a href="#">상품안내</a>
            </li>
            <li>
              <a href="#">고객센터</a>
            </li>
            <li>
              <a href="#">이벤트</a>
            </li>
            <li>
              <a href="#">서류제출하기</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
