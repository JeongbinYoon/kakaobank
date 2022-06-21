## Haitai project-2022-04-22

## 프로젝트 정보

---

> 본 프로젝트는 카카오뱅크 메인 페이지 클론 프로젝트이다. 각 섹션 단위별로 컴포넌트를 나누어 협업을 통해 제작했다.
> Typescript를기반하여 React로 제작했다.


## 역할분담

---

> [팀장] 윤정빈 : Header, Main, Withdrawal
>
> [팀원] 이승기 : Desposit, Moim, Weeks26, Remittance
>
> [팀원] 유성현 : Sky, End, Footer


## Header

---

> Header의 각 메뉴에 마우스 오버 되었을 때 서브 메뉴가 나타나도록 했다.


## Main

---
>
> tsx 구문 안에서 background 를 설정하고 사이즈 조절을 하였다.

## Withdrawal, Desposit, Weeks26, Remittance

---

> CSS flex 속성으로 레이아웃을 구성하고 position 속성을 이용하여 배치했다.

## Remittance

---

> 리스트로 여러개의 박스를 만들고 CSS의 flex 속성으로 배치했다. 본문의 많은 양의 글들은 line-clamp 속성으로 3줄 이상 넘어갈 시 숨기도록 했다.

## Sky, End

---

> Sky 컴포넌트의 CSS flex 속성의 direction을 column으로 설정하여 전체 레이아웃을 세로로 구성하고 각 버튼은 리스트로 만들었다.

## Footer

---

> CSS의 flex 속성으로 요소들 세로 배치하였고 각 열마다 요소를 추가하였다.


## 느낀점

---

> 각 컴포넌트를 역할을 나누어 만든 후 하나의 프로젝트에 import 하였기 때문에 프로젝트를 구현하면서 서로의 충돌없이 할 수 있었다.
> 수정이 필요한 경우에도 컴포넌트 별로 나누어져있어 유지 보수가 편리하다는 생각이 들었다.
> Typescript를 사용하였기 때문에 제작 중에 타입에러가 많이 나서 힘들었지만 그것이 Typescript를 사용하는 이유이고 배포 시의 오류를 사전에 방지할 수 있다는 것을 알게되었다.
