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

1. component 만들어 첨부
2. component에 데이터 바인딩
3. 컴퐅터는 3개 map 반복문 적용