// 5.3.1 전역 실행 컨텍스트의 스코프 체인
var var1 = 1;
var var2 = 2;
console.log(var1);
console.log(var2);

// 5.3.2 함수를 호출한 경우 생성되는 실행 컨텍스트의 스코프 체인
function func(){
  var var1 = 10;
  var var2 = 20;
  console.log(var1);
  console.log(var2);
}
func();

var value = 'value1';
function printFunc(){
  var value = 'value2';
  function printValue(){
    return value;
  }
  console.log(this.value); // value1
  console.log(printValue()); // value2
}
printFunc();

var val = "val1";
function printVal(){
  return  val;
}
function printFunction(func){
  var val = "val2";
  console.log(val ,func());
}
printFunction(printVal);

// 스코프체인 수정 키워드 with
var y = {x:5};
function withExamFunc(){
  var x = 10;
  var z;

  // with(y) 객체가 스코프체인 제일 앞에 추가
  with(y){
    z = function(){
      console.log(x); // 5
    }
  }
  z();
}
withExamFunc();

// 호이스팅에 대한 이해
foo();
bar();

var foo = function(){
  console.log('foo and x = ' + x);
};

function bar(){
  console.log("bar and x = " + x);
}

var x = 1;
/*
1. var foo;
function bar(){console.log};
var x;
2. foo(); // error
bar();
3. foo = function(){console.log()}
*/