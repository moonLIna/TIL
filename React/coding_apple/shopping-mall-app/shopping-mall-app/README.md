## 쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치
  - yarn 설치 권장 : npm 보다 빠름
  - React-bootstrap
  `npm install react-bootstrap bootstrap`
  - bootStrap 사용 시 요소 import 한 후 사용
  `import { Navbar, Nav, Button, Jumbotron } from 'react-bootstrap';`

## 쇼핑몰 레이아웃 디자인 시간
  - src는 발행시 압축 -> public에 이미지 넣기

## 코드가 길다면 import / export 사용해보기
  - export : 마지막에 한 번만 사용
```javascript
export default variableName
export { var1, var2 }

import name from './directory.js';
import { var1, var2 } from './directory.js';
```
## 상품목록 Component화 + 반복문
  - `/* eslint-disable */` eslint warning 무시하기
  - props 전송법
    + 1. `<자식컴포넌트 보낼이름={전송할 state} />`
    + 2. `function 자식컴포넌트(props){}`
    + 3. `props.보낼이름` 사용
  - map key값 설정 시 return 되는 부분에 key 값 줄 것

## router 1 : setup
  - react-router-dom 설치   
    `npm install react-router-dom`
  - react-router-dom index.js에 연결   
  `import { BrowserRouter } from 'react-router-dom'`
  - index.js에 추가    `<BrowserRouter><App /></BrowserRouter>`
  - App.js에 필요한 요소  import    `import { Link, Route, Switch } from form 'react-router-dom'`
  - Route로 페이지 나누기    `<Route path="/example" component={ componentName }></Route>`
  - Route 경로 완벽 일치 시 페이지 노출 원하면 `<Route exact path=''>`

  - React Router 특징 : html 파일이 하나에서 이동이 이루어지는 것

## HashRouter && BrowserRouter
  - HashRouter
    + 라우팅 안전하게 할 수 있게 도와줌
    + 사이트 주소 뒤에 #이 붙는데 # 뒤에 적는 것은 서버로 전달 X
  - BrowserRouter
    + 라우팅을 리액트가 아니라 서버에게 요청할 가능성이 있음
    + 이를 방지하기 위해 서버에 서버 라우팅 방지 API 작성 필요

## router 2 : Link, Switch, History
  - 페이지 이동하는 버튼
    1. `href=""` 삭제
    2. 링크 대상체 `<Link to="/path"> 버튼 </Link>`
  
  - React Router custom 버튼
    1. `import { useHistory } from 'react-router-dom'`
    2. `let history = useHistory()` react-router-dom v5 이상 / react v16.3 이상
    3. 뒤로가기 : `<button onClick={ ()=>{ history.goBack() } }>` 
    4. 특정 페이지 이동 : `<button onClick={ ()=>{ history.push() } }>`

  - Switch 컴포넌트
    + Router 주소가 여러개가 일치해도 하나만 노출하고 싶을 때 사용
    + 해당하는 `<Route>`를 `<Switch>`로 감싸면 상단에서 일치하는 요소 하나만 노출
    + `<Route path="/:id">` 주소에 어떤 문자열이라도 오면 보여줌

## router 3 : URL Parameter
  - 데이터 보관하는 법
    + 중요한 데이터는 최상위 컴포넌트 `App`에 보관
    + 상위 컴포넌트에서 하위 컴포넌트로 보내는 방식이 쉬움
    + 데이터가 너무 많을 경우 -> 데이터 파일 따로 작성 OR redux 파일에 보관
 
  - URL Parameter 이용하는 법
    + `import { useParams } from 'react-router-dom'` 
    + `let { varName } = useParams()` {사용자가 입력한 URL 파라미터}
    + 데이터의 순서가 바뀐다면 상세페이지도 이상해짐