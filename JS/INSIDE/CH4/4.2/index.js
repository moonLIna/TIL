// 4.2.1 함수도 객체다
function add(x, y) {
  return x + y;
}
add.result = add(3, 2);
add.status = "ok";

console.log(add.result);
console.log(add.status);

// 4.2.2.1 변수나 프로퍼티의 값으로 할당
var num = 100;
var bar = function() {
  return 100;
};

console.log(bar());
var obj = {};
obj.baz = function() {
  return 200;
};

console.log(obj.baz());

//4.2.2.2 함수 인자로 전달
var foo = function(func) {
  func();
};
foo(function() {
  console.log("Function can be used as the argument.");
});

//4.2.2.3 리턴값으로 활용
var returnFunc = function() {
  return function() {
    console.log("this function is the return value.");
  };
};

var returnBar = returnFunc();
returnBar();

//4.2.3.1 length 메서드
function func0() {}
function func1(x) {
  return x;
}
function func2(x, y) {
  return x + y;
}
function func3(x, y, z) {
  return x + y + z;
}
console.log("func0.length - " + func0.length);
console.log("func1.length - " + func1.length);
console.log("func2.length - " + func2.length);
console.log("func3.length - " + func3.length);

// 4.2.3.2 prototype 프로퍼티
function myFunction() {
  return true;
}
console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);
