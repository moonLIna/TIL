# CH4 - 함수와 프로토타입 체이닝

## 4.4 함수 호출과 this
### 4.4.1 arguments 객체
  - 미달된 인자 undefined 값 할당
  - 초과된 인자 에러 X, 무시
  - 런타임시 호출된 인자 개수 확인 -> 동작 다르게 할 때 arguments 객체 
  - *함수를 호출할 때 넘긴 인자들이 배열 형태로 저장된 유사 배열 객체 = arguments 객체*
  - arguments 객체 구성요소
    + 함수 호출시 넘겨진 인자(배열 형태)
    + length 프로퍼티
    + callee 프로퍼티 : 현재 실행 중인 함수의 참조값
    
### 4.4.2 호출 패턴과 this 바인딩
  - 함수 호출 시 인자값, arguments 객체, this 인자 -> 함수 내부 전달
  - this 객체는 함수 호출되는 방식에 따라 다른 객체 참조
  
#### 4.4.2.1 객체에 메서드를 호출할 때 this 바인딩
  - 메서드 내부 코드에서 사용된 this = 해당 메서드 호출 객체
```javaScript
var myObject = {
  name: "foo",
  sayName: function() {
    console.log(this.name);
  }
};

var otherObject = {
  name: "bar"
};
otherObject.sayName = myObject.sayName;

myObject.sayName(); // foo
otherObject.sayName(); // bar
```

#### 4.4.2.2 함수를 호출할 때 this 바인딩
  - *메서드 내부 코드에서 사용된 this = 전역 객체*
```javaScript
var test = "this is test";
console.log(window.test);

var sayFoo = function() {
  console.log(this.test); // sayFoo() 호출 시 this는 전역 객체 바인딩
};
sayFoo();
```
  - 내부 함수 호출했을 경우
```javaScript
var value = 100;
var myObj = {
  value: 1,
  func1: function() {
    var that = this;

    this.value += 1;
    console.log("func() called. this.value : " + this.value); // 2 

    func2 = function() {
      that.value += 1;
      console.log("func2() called. this.value : " + this.value); // 101
      console.log("func2() called. this.value : " + that.value); // 3

      func3 = function() {
        that.value += 1;
        console.log("func3() called. this.value : " + this.value); // 102
        console.log("func3() called. this.value : " + that.value); // 4
      };
      func3();
    };
    func2();
  }
};
myObj.func1();
```
  - 부모 함수의 this를 내부 함수가 접근 가능한 다른 변수에 저장
  - 관례상 this 값 저장 변수 명 = `that`
  
#### 4.4.2.3 생성자 함수를 호출할 때 this 바인딩
  - 기존 함수에 new 연산자를 붙여서 호출하면 생성자 함수로 동작
  - 생성자 함수는 함수명의 첫 문자를 대문자로 쓸 것
  
  - 생성자 함수가 동작하는 방식
    + 1. 빈 객체 생성 및 this 바인딩
      + *생성자 함수 생성 객체는 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정*
    + 2. this를 통한 프로퍼티 생성
    + 3. 생성된 객체 리턴
      + 리턴문 없을 시 this로 바인딩된 새 객체 리턴
      + 일반 함숨 호출 시 리턴값 X -> undefined 리턴
      + 새 객체(this)가 아닌 다른 객체 반환 시, 해당 객체 리턴
      
  - 객체 리터럴 방식 VS 생성자 함수 방식
```javascript
var person1={
  name : 'nicole',
  age: 27,
  gender: 'woman'
};
console.dir(person1); // __proto__ : Object

function Person(name, age, gender, position){
  this.name = name;
  this.age = age;
  this.gender = gender;
};

var kim = new Person('kim',33,'man');
console.dir(kim); // __proto__ : Person

var baz = new Person('baz', 22, 'woman');
console.dir(baz); // __proto__ : Person
```
  - 생성자 함수 new 없이 호출 시
    + 일반 함수 호출과 생성자 함수 호출시 this 바인딩 방식이 다름
    + 일반 함수 this - window 전역 객체
    + 생성자 함수 this - 새 빈 객체
    
  - 객체 생성하는 별도의 코드패턴
    + new 없이 사용하는 것 방지
```javascript
function A(arg){
  if(!(this instanceof A)){return new A(arg);}
  this.value = arg ? arg : 0;
}
var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);
```

#### 4.4.2.4 call, apply 메서드를 이용한 명시적인 this 바인딩
  - `function.apply(thisArg, [argArray])`
  - `function.call(thisArg, arg1, arg2 ... )`
  - 본질적인 기능은 함수 호출
  - 대표적인 용도 : 유사 배열 객체(ex.arguments)에서 배열 메서드 사용
```javascript
function myFunction(){
  console.dir(arguments);
  // arguments.shift(); 에러 발생
  var args = Array.prototype.slice.apply(arguments);
  console.dir(args);
}
myFunction(1,2,3);
```
### 4.4.3 함수 리턴
  - 자바스크립트는 항상 리턴값 반환
  - 규칙 1. 일반 함수/메서드 리턴값X -> undefined
  - 규칙 2. 생성자 함수 리턴값X -> 생성된 객체 
    + 생성자 함수 리턴값이 기본값인 경우 리턴값 무시 -> this 바인딩 객체
