// 4.1.2 함수 선언문 방식
function addStatement(x, y) {
  return x + y;
}
console.log(addStatement(3, 5));

// 4.1.3 함수 표현식 방식
var addExpression = function(x, y) {
  return x + y;
};
var plus = addExpression;

console.log(addExpression(3, 5));
console.log(plus(3, 5));

var add = function sum(x, y) {
  return x + y;
};
console.log(add(3, 5));
// console.log(sum(3, 5));

var factorialVar = function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorialVar(3));
// console.log(factorial(3));

// 4.1.4. function() 생성자 함수를 통한 함수 생성하기
var addFunc = new Function("x", "y", "return x+y");
console.log(addFunc(10, 10));

// 4.1.5 함수 호이스팅
// 함수 선언문 방식
hoistingTest(2, 3);
function hoistingTest(x, y) {
  return x + y;
}
hoistingTest(3, 4);

// 함수 표현식 방식
// hoistingTest2(2, 3);
var hoistingTest2 = function(x, y) {
  return x + y;
};
hoistingTest(3, 4);
