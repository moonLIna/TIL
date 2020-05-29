// 7.2 자바스크립트에서의 함수형 프로그래밍
var f1 = function(input){
  var result;
  /* 암호화 작업 수행 */
  result = 1;
  return result;
}
var f2 = function(input){
  var result;
  /* 암호화 작업 수행 */
  result = 2;
  return result;
}
var f3 = function(input){
  var result;
  /* 암호화 작업 수행 */
  result = 3;
  return result;
}

var get_encrypted = function(func){
  var str = 'text';
  return function(){
    return func.call(null, str);
  } 
  // 반환하는 함수 클로저 -> 변수 str 외부에서 접근 불가 => 내부 데이터 상태 변경X
}

var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f2)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f3)();
console.log(encrypted_value);

// 7.2.1 배열의 각 원소 총합 구하기
// 명령형 프로그래밍 방식
function sum(arr){
  var len = arr.length;
  var i = 0;
  var sum = 0;

  for(; i < len; i++){
    sum += arr[i];
  }
  return sum;
}
function multiply(arr){
  var len = arr.length;
  var i = 0;
  var result = 1;

  for(; i < len; i++){
    result *= arr[i];
  }
  return result;
}
var arr = [1, 2, 3, 4];
console.log(sum(arr));
console.log(multiply(arr))

// 함수형 프로그래밍 방식
function reduce(func, arr, memo){
  var len = arr.length,
    i = 0,
    accum = memo;

  for(; i < len; i++){
    accum = func(accum, arr[i]);
  }

  return accum;
}
var sumFunc = function(x, y){
  return x+y;
}
var multiplyFunc = function(x, y){
  return x*y;
}

console.log(reduce(sumFunc, arr, 0));
console.log(reduce(multiplyFunc, arr, 1));

// 7.2.2 팩토리얼
function fact(num){
  var val = 1; 
  for(var i = 2; i <= num; i++){
    val *= i;
  }
  return val;
}
console.log(fact(5));
// 재귀 호출을 이용한 팩토리얼
function fact2(num){
  if(num == 0) return 1;
  else return num * fact(num - 1);
}
console.log(fact2(5));

// 함수형 팩토리얼
var fact3 = function(){
  var cache = { '0' : 1 };
  var func = function(n){
    var result = 0;
    if(typeof(cache[n]) === 'number'){
      result = cache[n];
    } else {
      result = cache[n] = n * func(n-1);
    }
    return result;
  }
  return func;
}();
console.log(fact3(5));
console.log(fact3(10));

// 메모제이션 패턴
/*
function Calculate(key, input, func){
  Calculate.data = Calculate.data || {};
  if(!Calculate.date[key]){
    var result;
    result = func(input);
    Calculate.date[key] = result;
  }
  return Calculate.data[key];
}

var result = Calculate(1, 5, function(input){
  return input * input;
});
// console.log(result);
result = Calculate(2, 5, function(input){
  return input * input / 4;
});
// console.log(result);
// console.log(Calculate(1));
*/
Function.prototype.memoization = function(key) {
  var arg = Array.prototype.slice.call( arguments, 1 );
  this.data = this.data || {};

  return this.data[key] !== undefined ? 
    this.data[key] : this.data[key] = this.apply(this, arg);
};

function myCalculate(input){
  return input * input;
}
function myCalculate2(input){
  return input * input / 4;
}

/* 
memoization 함수 실행 -> 정해진 변수 'key'값으로 1 넘김 -> 5는 arguments로???
*/
myCalculate.memoization(1, 5);
myCalculate.memoization(2, 4);
myCalculate2.memoization(1, 6);
myCalculate2.memoization(2, 7);

console.log(myCalculate.memoization(1));
console.log(myCalculate.memoization(2));
console.log(myCalculate2.memoization(1));
console.log(myCalculate2.memoization(2));

// 7.2.3 피보나치 수열
var fibo = function(){
  var cache = {'0' : 0, '1' : 1};
  var func = function(n){
    if(typeof(cache[n]) === 'number'){
      result = cache[n];
    } else {
      result = cache[n] = func(n-1) + func(n-2);
    }

    return result;
  }
  return func;
}();
console.log(fibo(10));

var cacher = function(cache, func){
  var calculate = function(n){
    if(typeof(cache[n]) === 'number'){
      result = cache[n];
    } else {
      result = cache[n] = func(calculate, n);
    }

    return result;
  }
  return calculate;
}
var cacherFact = cacher({ '0' : 1 }, function(func, n){
  return n * func(n - 1);
});
var cacherFibo = cacher({ '0' : 0, '1' : 1 }, function(func, n){
  return func(n-1) + func(n-2);
});

console.log(cacherFact(5));
console.log(cacherFibo(5));
/*
  func10 -> cache10 = func9 + 8 55
  func9 -> cache9 = func 8 + 7 34
  func8 -> cache8 = func 7 + 6 21
  func7 -> cache9 = func 6 + 5 13
  func6 -> cache8 = func 5 + 4 8
  func5 -> cache9 = func 4 + 3 5
  func4 -> cache8 = func 3 + 2 3
  func3 -> cache9 = func 2 + 1 3
  func2 -> cache8 = func 1 + 0 1
  func1 -> 1
  func0 -> 0
*/