import React from "react";
import styles from "./header.module.css";

const Header = () => {
  const handleMouseEnter = (e: any) => {
    console.log(e.currentTarget.childNodes[1]);
    e.currentTarget.childNodes[1].style.display = "flex";
  };

  const handleMouseLeave = (e: any) => {
    console.log(e.currentTarget);
    e.currentTarget.style.display = "none";
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src="./logo_black.svg" alt="logo" />
        <nav className={styles.nav}>
          <ul>
            <li onMouseEnter={handleMouseEnter}>
              <a href="#">은행소개</a>
              <div className={styles.depth2} onMouseLeave={handleMouseLeave}>
                <ul className={styles.depth2_ul}>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">카카오뱅크</a>
                      </li>
                      <li>
                        <a href="#">브랜드</a>
                      </li>
                      <li>
                        <a href="#">주주사 소개</a>
                      </li>
                      <li>
                        <a href="#">오시는길</a>
                      </li>
                      <li>
                        <a href="#">제휴문의</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">경영정보</a>
                      </li>
                      <li>
                        <a href="#">이사회</a>
                      </li>
                      <li>
                        <a href="#">기업지배구조</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">인재영입 {">"}</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">새소식</a>
                      </li>
                      <li>
                        <a href="#">공지사항</a>
                      </li>
                      <li>
                        <a href="#">보도자료</a>
                      </li>
                      <li>
                        <a href="#">입찰공고</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li onMouseEnter={handleMouseEnter}>
              <a href="#">IR투자정보</a>
              <div className={styles.depth2} onMouseLeave={handleMouseLeave}>
                <ul className={styles.depth2_ul}>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">공시정보</a>
                      </li>
                      <li>
                        <a href="#">전자공시</a>
                      </li>
                      <li>
                        <a href="#">경영공시</a>
                      </li>
                      <li>
                        <a href="#">바젤공시</a>
                      </li>
                      <li>
                        <a href="#">기타공시</a>
                      </li>
                      <li>
                        <a href="#">공시규정</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">경영정보</a>
                      </li>
                      <li>
                        <a href="#">이사회</a>
                      </li>
                      <li>
                        <a href="#">기업지배구조</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">재무정보</a>
                      </li>
                      <li>
                        <a href="#">재무제표</a>
                      </li>
                      <li>
                        <a href="#">감사보고서</a>
                      </li>
                      <li>
                        <a href="#">영업보고서</a>
                      </li>
                      <li>
                        <a href="#">신용등급</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">IR자료실</a>
                      </li>
                      <li>
                        <a href="#">실적발표</a>
                      </li>
                      <li>
                        <a href="#">주가정보</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">IR일정</a>
                      </li>
                      <li>
                        <a href="#">IR행사</a>
                      </li>
                      <li>
                        <a href="#">IR미팅예약</a>
                      </li>
                      <li>
                        <a href="#">주주총회</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">공고</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li onMouseEnter={handleMouseEnter}>
              <a href="#">상품안내</a>
              <div className={styles.depth2} onMouseLeave={handleMouseLeave}>
                <ul className={styles.depth2_ul}>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">예적금</a>
                      </li>
                      <li>
                        <a href="#">입출금통장</a>
                      </li>
                      <li>
                        <a href="#">모임통장</a>
                      </li>
                      <li>
                        <a href="#">세이프박스</a>
                      </li>
                      <li>
                        <a href="#">저금통</a>
                      </li>
                      <li>
                        <a href="#">정기예금</a>
                      </li>
                      <li>
                        <a href="#">자유적금</a>
                      </li>
                      <li>
                        <a href="#">26주적금</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">대출</a>
                      </li>
                      <li>
                        <a href="#">비상금대출</a>
                      </li>
                      <li>
                        <a href="#">마이너스 통장대출</a>
                      </li>
                      <li>
                        <a href="#">신용대출</a>
                      </li>
                      <li>
                        <a href="#">개인사업자 대출</a>
                      </li>
                      <li>
                        <a href="#">전월세보증금 대출</a>
                      </li>
                      <li>
                        <a href="#">주택담보대출</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">서비스</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">내 신용정보</a>
                      </li>
                      <li>
                        <a href="#">해외송금 보내기</a>
                      </li>
                      <li>
                        <a href="#">해외송금 받기</a>
                      </li>
                      <li>
                        <a href="#">프렌즈 체크카드</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li onMouseEnter={handleMouseEnter}>
              <a href="#">고객센터</a>
              <div className={styles.depth2} onMouseLeave={handleMouseLeave}>
                <ul className={styles.depth2_ul}>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">이용안내</a>
                      </li>
                      <li>
                        <a href="#">이용시간 안내</a>
                      </li>
                      <li>
                        <a href="#">ATM 이용안내</a>
                      </li>
                      <li>
                        <a href="#">금리안내</a>
                      </li>
                      <li>
                        <a href="#">금리인하요구권 안내</a>
                      </li>
                      <li>
                        <a href="#">수수료안내</a>
                      </li>
                      <li>
                        <a href="#">상담 안내</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">상담하기</a>
                      </li>
                      <li>
                        <a href="#">고객의 소리</a>
                      </li>
                      <li>
                        <a href="#">1:1 문의</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">소비자보호</a>
                      </li>
                      <li>
                        <a href="#">소비자보호체계</a>
                      </li>
                      <li>
                        <a href="#">소비자보호 우수사례</a>
                      </li>
                      <li>
                        <a href="#">전자민원</a>
                      </li>
                      <li>
                        <a href="#">소비자보호공시</a>
                      </li>
                      <li>
                        <a href="#">민원사무편람</a>
                      </li>
                      <li>
                        <a href="#">금융정보</a>
                      </li>
                      <li>
                        <a href="#">금융사기 관련공시</a>
                      </li>
                      <li>
                        <a href="#">보안취약점 신고 안내</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">증명서</a>
                      </li>
                      <li>
                        <a href="#">나의 증명서 발급내역</a>
                      </li>
                      <li>
                        <a href="#">증명서 진위 확인</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={styles.lists}>
                      <li>
                        <a href="#">약관.서식</a>
                      </li>
                      <li>
                        <a href="#">약관</a>
                      </li>
                      <li>
                        <a href="#">서식</a>
                      </li>
                      <li>
                        <a href="#">상품설명서</a>
                      </li>
                      <li>
                        <a href="#">상품공시</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
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
