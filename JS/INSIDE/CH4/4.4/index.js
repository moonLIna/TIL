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
    this.value += 1;
    console.log("func() called. this.value : " + this.value);

    func2 = function() {
      this.value += 1;
      console.log("func2() called. this.value : " + this.value);

      func3 = function() {
        this.value += 1;
        console.log("func3() called. this.value : " + this.value);
      };
      func3();
    };
    func2();
  }
};
myObj.func1();
