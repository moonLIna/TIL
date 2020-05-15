var foo = function() {
  return function() {
    console.log("this is the return value");
  };
};
var bar = foo();
bar();

// 4.3.2 즉시 실행 함수
(function(name) {
  console.log("this is the immediate function -> " + name);
})("foo");

(function(window, undefied) {
  // 즉시 실행 함수의 다른 용도 in JQuery
});

//4.3.3 내부 함수
function parent() {
  var a = 100;
  var b = 200;

  function child() {
    var b = 300;
    console.log(a);
    console.log(b);
  }
  child();
}
parent();
// child(); 외부에서 내부함수로 접근 오류

// 클로저를 사용해 함수 스코프 외부에서 내부 함수 호출
function parentScope() {
  var a = 100;
  var child = function() {
    console.log(a);
  };
  return child;
}
var inner = parentScope();
inner();

// 4.3.4 함수를 리턴하는 함수
var self = function() {
  console.log("a");
  return function() {
    console.log("b");
  };
};
self = self(); //a
self(); //b
