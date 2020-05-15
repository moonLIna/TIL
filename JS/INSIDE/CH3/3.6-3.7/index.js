// 3.6 기본 타입과 표준 메서드
var num = 0.5;
console.log(num.toExponential(1));
console.log("test".charAt(2));

// 3.7.1 +연산자
var add1 = 1 + 2;
var add2 = "my" + " string";
var add3 = 1 + " string";
var add4 = "string " + 2;

console.log(add1, add2, add3, add4);

//3.7.2 typeof 연산자
var test0 = {};
var test1 = null;
var test2 = [];
var test3 = function() {
  console.log("this is function");
};

console.log(typeof test0);
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);

// 3.7.3. 동등 연산자와 일치 연산자
console.log(1 == "1");
console.log(1 === "1");

//3.7.4 !!연산자
console.log("3.7.4 !!연산자");
console.log(!!0);
console.log(!!1);
console.log(!!"string");
console.log(!!"");
console.log(!!true);
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log("empty obj " + !!{});
console.log("empty array " + !![]);
