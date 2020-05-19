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
  return obj;
}
newObj.prototype.who = function(greeting, name){
  console.log(greeting + " " + (name || "everyone"));
}
var objPerson = new newObj(objHello, "nicole");
objPerson.call();

// 5.4.2.2 함수의 캡슐화
/*
var buffAr = [
  'i am ',
  '',
  '. i live in ',
  '',
  '. i\'m ',
  '',
  ' years old.',  
];
function getCompletedStr(name, city, age){
  buffAr[1] = name;
  buffAr[3] = city;
  buffAr[5] = age;

  return buffAr.join('');
}

var str = getCompletedStr('nick', 'seoul', 16);
console.log(str);
*/
var getCompletedStr = (function(){
  var buffAr = [
    'i am ',
    '',
    '. i live in ',
    '',
    '. i\'m ',
    '',
    ' years old.',  
  ];
  return (function(name, city, age){
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
  });
})();
var str = getCompletedStr('kim', 'seoul', 22);
console.log(str);

// 5.4.2.3 setTimeout()에 지정되는 함수의 사용자 정의
function callLater(obj, a, b){
  return (function(){
    obj["sum"] = a + b;
    console.log(obj["sum"]);
  });
}
var sumObj = {
  sum : 0
}
var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);
/*
1. func -> sumobj, 1, 2 전달
2. 익명함수 반환 obj.sum = 1+2 할당
3. 해당 값 콘솔로 반환
4. setTimeout으로 func 정해진 시간 지난 후 호출
*/

// 5.4.3 클로저를 활용할 때 주의사항
// 5.4.3.1 클로저의 프로퍼티 값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의해야 한다
function outerFunc(argNum){
  var num = argNum;
  return function(x){
    num += x;
    console.log('num: ' + num);
  }
}
var exam = outerFunc(40);
exam(5);
exam(-10);
/* 
1. exam , argNum = 40
    num = 40
2. exam, x = 5
    num = 40 + 5; num = 45
3. exam, x = -10
    num = 45 - 10; 30
*/

// 5.4.3.2 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우도 있다.
function testfunc(){
  var x = 1;
  return {
    func1 : function(){console.log(++x);},
    func2 : function(){console.log(-x);},
  };
};
var exam2 = testfunc();
exam2.func1();
exam2.func2();
/*
1. func.func1() -> console -> 2 // return x -> x = 2
2. func.func2() -> console -> 0
*/

// 5.4.3.3 루프 안에서 클로저를 활용할 때는 주의하자
/*function countSeconds(howMany){
  for(var i = 1; i <= howMany; i++){
    setTimeout(function(){
      console.log(i);
    }, i * 1000);
  }
};
countSeconds(3);
*/
/*
1. countSeconds howMany = 3 
2. for 1 -> setTimeout(delay) -|  
3. for 2 -> setTimeout(delay) -| 
3. for 3 -> setTimeout(delay) -|-> i = 4 ; console i 출력
*/
function countSeconds(howMany){
  for (var i = 1; i <= howMany; i++){
    (function(currentI){
      setTimeout(function(){
        console.log(currentI);
      }, currnetI * 1000);
    }(i));
  }
};
countSeconds(3);
