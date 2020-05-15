// 4.4.1 argument 객체
function func(arg1, arg2) {
  console.log(arg1, arg2);
}
func();
func(1);
func(1, 2);
func(1, 2, 3);

function add(a, b) {
  console.dir(arguments);
  return a + b;
}
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));

function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 4.4.2.1 객체의 메서드 호출할 때의 this 바인딩
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

myObject.sayName();
otherObject.sayName();

// 4.4.2.2 함수를 호출할 때 this 바인딩
var fooName = "i'm foo";
console.log(fooName);
console.log(window.fooName);

var test = "this is test";
console.log(window.test);

var sayFoo = function() {
  // console.log(this.test);
};
sayFoo();

// 내부함수의 this 바인딩 동작을 보여주는 예제 코드
var value = 100;
var myObj = {
  value: 1,
  func1: function() {
    var that = this;

    this.value += 1;
    console.log("func() called. this.value : " + this.value);

    func2 = function() {
      that.value += 1;
      console.log("func2() called. this.value : " + that.value);

      func3 = function() {
        that.value += 1;
        console.log("func3() called. this.value : " + that.value);
      };
      func3();
    };
    func2();
  }
};
myObj.func1();

// 4.4.2.3. 생성자 함수를 호출할 때 this 바인딩
var Person = function(name){
  // 함수 코드 실행 전
  this.name = name;
  // 함수 리턴
}
var foo = new Person('foo');
console.log(foo.name);

// 객체 리터럴 VS 생성자 함수
var person1={
  name : 'nicole',
  age: 27,
  gender: 'woman'
};
console.dir(person1);

function Person(name, age, gender, position){
  this.name = name;
  this.age = age;
  this.gender = gender;
};

var kim = new Person('kim',33,'man');
console.dir(kim);

var baz = new Person('baz', 22, 'woman');
console.dir(baz);

var qux = Person("qux", 20, "man");
console.log(qux); // undefined

console.log(window.name); // qux
console.log(window.age); // 20
console.log(window.gender); // man

// 강제로 인스턴스 생성하기
function A(arg){
  if(!(this instanceof A)){return new A(arg);}
  this.value = arg ? arg : 0;
}
var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);
// console.log(global.value);

// 4.4.2.4 call, apply 메서드를 이용한 명시적인 this 바인딩
function Person2(name, age, gender){
  this.name = name;
  this.age  = age;
  this.gender = gender;
}
var foo = {};
var foo2 = {};

Person2.apply(foo, ['foo', 30, 'man']);
Person2.call(foo2, 'foo2', 30, 'man');
console.dir(foo);
console.dir(foo2);

// apply() 메서드를 활용한 arguments 객체의 배열 표준 메서드 slice() 활용
function myFunction(){
  console.dir(arguments);
  // arguments.shift(); 에러 발생
  var args = Array.prototype.slice.apply(arguments);
  console.dir(args);
}
myFunction(1,2,3);

// 4.3.3.1 1 ) 일반함수나 메서드는 리턴값을 지정하지 않을 경우, undefined 리턴
var noReturnFunc = function(){
  console.log('this function has no return statement');
};

var result = noReturnFunc();
console.log(result);
console.log(noReturnFunc());

// 4.4.3.2 2) 생성자 함수에서 리턴값 지정하지 않을 시 생성된 객체 리턴
function Person3(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
  
  return {name: 'bar', age: 20, gender:'woman'};
}
var boo = new Person3('boo', 33, 'man');
console.dir(boo);

// 생성자 함수에서 기본타입값을 리턴했을 때
function Person4(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;

  return 100;
}
var lee = new Person4('lee', 40, 'woman');
console.log(lee);