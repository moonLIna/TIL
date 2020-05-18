function outerFunc(){
  var x = 10;
  var innerFunc = function(){console.log(x)};
  return innerFunc;
}
var inner = outerFunc();
inner();

// 쉽게 이해하는 클로저
function outerFunction(){
  var x = 1;  // 자유변수
  // 하단의 함수가 클로저
  return function(){
    console.log(x, arguments);
  }
}
var new_func = outerFunction();
/*outerFunction 실행 컨텍스트가 끝남 */
new_func();

function outerFunc2(arg1, arg2){
  var local = 8;
  function innerFunc(innerArg){
    console.log((arg1 + arg2)/(innerArg + local));
  }
  return innerFunc;
}
var exam1 = outerFunc2(2,4);
exam1(2);
/*
1. exam1 실행 -> outerFunc 실행
2. innerFunc 실행
3. arg1 = 2, arg2 = 4, innerArg = 2, local = 8
4. (2+4)/(2+8) = 6/10 = 0.6
*/

// 5.4.2 클로저의 활용
// 5.4.2.1 특정 함수에 사용자가 정의한 객체의 메서드 연결하기
function HelloFunc(func){
  this.greeting = "hello";
}
HelloFunc.prototype.call = function(func){
  func ? func(this.greeting) : this.func(this.greeting);
}
var userFunc = function(greeting){
  console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;

objHello.call();
Hello = new HelloFunc();

// 하나 이상의 인자를 넘길 경우
function saySomething(obj, methodName, name){
  return (function(greeting){
    return obj[methodName](greeting, name);
  });
}
function newObj(obj, name){
  obj.func = saySomething(this, "who", name);
}
newObj.prototype.who = function(greeting, name){
  console.log(greeting + " " + (name || "everyone"));
}