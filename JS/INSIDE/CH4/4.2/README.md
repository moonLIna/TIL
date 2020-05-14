# CH4 - 함수와 프로토타입 체이닝

## 4.2 함수 객체 : 함수도 객체다
### 4.2.1 자바스크립트에서는 함수도 객체다
  - 함수도 객체라는 것은 일반 객체처럼 프로퍼티를 가질 수 있다는 의미
  
### 4.2.2 자바스크립트에서 함수는 값으로 취급된다.
  - 일급 객체의 특징
    + 리터럴에 의한 생성
    + 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
    + 함수의 인자로 전달 가능
    + 함수의 리턴값으로 리턴 가능
    + 동적으로 프로퍼티 생성 및 할당 가능
  - 함수 = 일급 객체, 일급 객체의 특성으로 함수형 프로그래밍 가능

### 4.2.2.2 함수 인자로 전달
```javaScript
var foo = function(func){
  func();
};
foo(function(){
  console.log('function can be used as the argument');
});
```

### 4.2.2.3 리턴값으로 활용
```javascript
var foo = function() {
  return function() {
    console.log("this is the return value");
  };
};
var bar = foo();
bar();
```

### 4.2.3 함수 객체의 기본 프로퍼티
  - 함수는 일반적인 객체 기능에 추가로 호출되었을 때 정의된 코드를 실행하는 기능 가지고 있음
  - 함수 객체의 부모 역할을 하는 프로토타입 객체는 *Function.prototype 객체*이며 이것 역시 함수 객체
  - Function.prototype함수 객체의 부모는 자바스크립트 객체의 조상인 Object.prototype 객체
  - Function.prototype 메서드
    + apply(thisArg, argArray) 메서드
    + call(thisArg, [arg1, [arg2]]) 메서드
    + bind(thisArg, [arg1[arg2]]) 메서드
    
### 4.2.3.1 함수 객체의 length 프로퍼티
  - 함수가 정상적으로 실행될 때 기대되는 인자의 개수

### 4.2.3.2 함수 객체의 prototype 프로퍼티
  - 함수 객체의 *prototype 프로퍼티* =/= 모든 객체의 부모를 의미하는 *내부 프로퍼티 [[Prototype]]*
  - *prototype 프로퍼티*는 함수가 생성자로 사용될 때 생성된 객체의 부모 역할을 하는 프로토타입 객체 의미
