# nomadCoder - ReactJS
[repository](https://github.com/moonLIna/nomadcoders_movie_app)

### 0 .git
  - git init :: 저장소 생성
  - git add *파일명* ( git add * ) :: 변경한 파일 스테이지에 기록
  - git commit -m "message" :: commit하고 msg 입력
  - git push *origin* *master* :: 위의 과정을 거친 코드 git 반영
  
### 1. React 세팅하기
  - git, React 설치   
  - create-react-app 
    싱글 페이지 어플리케이션 개발을 도와주는 React 툴체인
    ```JavaScipt
    npx create-react-app applicaion_name
    cd applicaion_name
    npm start
    
    npm run build
    ```
  
### 2. JSX & Props
  - JSX = javascript + html
  - React component 특징   
    + component -> component, children component로 정보 보내는 것 가능   
    + React component는 유일성이 필요해서 key값 필요
  - React application은 한 번에 하나의 component만 rendering 가능
  - JS mapping    
    array 각 item에서 function을 실행하는 array를 가지는 function
    ```JavaScript
    function App() {
      return (
        <div className="App">
          {foodILike.map(dish => (
            <Food key={dish.id} name={dish.name} pic={dish.image}/>
          ))}
        </div>
      );
    }
    ```
### 3. PropTypes
  - Prop의 type을 체크해줌
  ```javascript
  npm i prop-types // terminal install
  
  functionName.propTypes = {
    propName : PropTypes.type.isRequired //isRequired는 해당 Prop이 필수일 때만 기입
  }
  ```
### 4. class/function 차이
  - class component는 react component로 확장되서 screen에 표시되는 것    
  - class component의 render method 자동으로 실행
  - function는 render 될 때의 값들을 유지
  - class는 그렇지 않기 때문에 이를 원한다면 'const props = this.props;' 처럼 추가 필요 
  - class component의 기능이 필요하진 않을 때는 function을 사용할 것
  
### 5. state란?
  - 유동적인 데이터들을 넣어두는 곳으로 직접 변경할 수 없고 function,class 모두 사용 가능
  - setState()를 통해 데이터 값 변경 하면 state가 변경을 감지해 자동으로 render function 호출
  - state = object이므로 setState는 새로운 state를 받아야 함
  - 미래에 사용할 state를 미리 선언하는 걸 추천
  ```javascript
  add = () => {
    this.setState({ count : this.state.count +1 });
  }
  addPrefer() => {
    this.setState(current => ({count : current.count +1}));
  }
  
  <button onClick = {this.add}>text</button> // 클릭 시 실행
  <button onClick = {this.add()}>text</button> // ()는 바로 실행 의미 
  <!-- react의 button에는 기본적으로 onClick Porp -->
  ```
### 6. component life cycle란
  - React가 component를 생성하고 없애는 방법
  - function > render > function
  - mounting : component 생성
    + constructor() > render() > componentDidMount()
  - updating : 일반적인 업데이터
    + componentDidUpdate() : 업데이트 완료 시 실행
  - unmounting : component 삭제
    + componentWillUnmount() : component 떠날 때 호출 
    
### 7. axios를 통한 data fetching
```javascript
npm install --s axios //termial
import axios from 'axios';

getMovies = async () => {
  const movies = await axios.get();
};

componentDidMount(){
  this.getMovies();
}
```
  - async/await(ES6)
    + async : 비동기 함수 선언
    + await : component에게 비동기 함수이니 기다렸다가 실행하라고 알려주는 것 
----------------------------------------------------------------------------
### 99. 참고자료

- [함수형 컴포넌트와 클래스, 어떤 차이가 존재할까? / overreact blog](https://overreacted.io/ko/how-are-function-components-different-from-classes/)
- [[React]axios와 fetch 비교 / 공대돌고래](https://donghunee.github.io/study/2019/10/21/react/)
