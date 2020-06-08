## JSX를 이용해 HTML 페이지 제작해보는건 처음이죠?
  1. 태그에 className으로 class 적용
  2. 리액트의 장점 => 데이터 바인딩이 쉬움 `{ 변수명, 함수 등 }`
  3. JSX에서 style 작성시 object 자료형
    - `style={fontSize:'20px', color: 'red'}`
  4. `<hr/>`이란?
  5. 데이터는 변수 or `state`
    - `state` 사용하기 위해 `{ useState }` 상단에 첨부
    - useState 사용시 [a, b] 반환 -> a는 데이터
    - react를 웹앱처럼 동작하게 하고 싶으면 중요 데이터는 state에 보관 > 즉 변경되는 데이터들 => state
    - state의 장점 : state 데이터 변경 시 감지 해 HTML 재렌더링 

## ES6 destructuring
```javascript
var [a,b] = [10, 100];
```
  - React state는 destructuring 문법
  - useState와 this.state 차이점은?

## 버튼에 기능개발을 해보자 & state 변경하는 법
  - eslint 란?
  - 보기 싫을 시 `/* eslint-disable */`
  - `onClick={ 함수() } onClick={ () => { 실행 내용 } }`
  - state는 그냥 변경 불가능 => 변경함수 사용 필, 자료형 일치 필요
  - `var varName = [...name]`를 통해 deep copy 후 변경

## reference data type && deep copy
  - spread operator 란?

## React Component
  - 이름은 대문자로 시작
  - `return()` 안에 있는 건 태그 하나로 => `div`나 `<></>` 사용
  - 분할해 보관하고 싶은 HTML 덩어리 / 자주 변경되는 HTML UI => Component 만들면 좋음
  - Component 단점 => state 쓸 때 복잡

## 클릭하면 동작하는 UI(모달창) 만드는 법
  - JSX 중간에 변수 사용 시 => `{ 변수명 }`
  - if 대신 삼항연산자 사용할 것
  - UI 만들 때 데이터나 상태 정보도 state로 저장

## map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
  - JSX 안에서 if/for 사용 X => map 사용
  - `array` 내의 모든 데이터에 똑같은 작업 시 사용하는 유사 반복문
  ```javascript
  let arrayData = [1,2,3,4];
  let newArray.map(function(a){
    return a * 2;
  })
  ```
  - map 반복문 시 key props 필요 

## `for` 반복문을 쓰고 싶다면?
  - 보통 함수안에서 사용
  - array에 HTML을 추가 -> return으로 HTML 반환

## props : 자식이 부모의 state를 가져다 쓰고 싶을 때
  1. 부모컴포넌트 state 쓸 때 props 사용
  2. <컴포넌트 명 작명={state명}/>
  3. 자식컴포넌트에서 props 파라미터 입력 후 사용

## input 다루기 : 사용자가 입력한 글을 변수에 저장하는 법
  - `onChange, onInput={ (e)=>{e.target.value} }// 사용자가 입력한 값`

## class를 이용한 옛날  React 문법
  - class : 변수와 함수의 덩어리
  - extends : React.Component의 성질을 상속 
  - constructor : class의 초기값, 변수 저장 공간
```javaScript
class className extends React.Component {
  constructor(){
    super();
    this.state = { stateName: 'stateDate' }
  }
  functionName(){
    // bind(this)하기 싫으면
    // functionName = () => {
    // }
  }
  render(){
    return (
      <div onClick={this.functionName.bind(this)>
        //HTML 넣어주세요
      </div>
    )
  }
}
```
  - class로 사용할 때 문제점은 JavaScript 문법을 모르면 사용하기 힘듬
  - function 으로 새요소 만드는 방식 추천