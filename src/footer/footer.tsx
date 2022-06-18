import React from "react";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div>
        <span>모바일뱅킹 서비스 이용약관</span>
        <span>전자금융거래 기본약관</span>
        <span>
          <strong>위치기반 서비스 이용약관</strong>
        </span>
        <span>
          <strong>개인정보처리방침</strong>
        </span>
        <span>
          <strong>전자민원접수</strong>
        </span>
        <span>보호금융상품등록부</span>
        <span>상품공시실</span>
        <span>경영공시</span>
        <span>공지사항</span>
      </div>
      <div>
        <span>전자서명인증업무준칙</span>
        <span>카카오뱅크 인증서 서비스 이용약관</span>
        <span>전자서명인증서비스 개인정보처리방침</span>
      </div>
      <div>(주)카카오뱅크</div>
      <div>
        <strong>Copyright</strong>
      </div>
    </div>
  </footer>
);

export default Footer;
