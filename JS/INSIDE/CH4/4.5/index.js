// 4.5.1 프로토타입의 두 가지 의미
function Person(name){
    this.name = name;
}
var foo = new Person('foo');
console.dir(Person);
console.dir(foo);

// 4.5.2 객체 리터럴 방식으로 생성된 프로토타입 체이닝
var myObject = {
    name : 'foo',
    sayName : function(){
        console.log('my name is ' + this.name);
    }
};
myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
// myObject.sayNickName();

// 4.5.3 생성자 함수로 생성된 객체의 프로토타입 체이닝
function Person2(name, age, hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}
var foo = new Person2('foo', 4, 'tennis');
console.log(foo.hasOwnProperty('name'));
console.dir(Person2.prototype);

// 4.5.5 기본 데이터 타입 확장
String.prototype.testMethod = function(){
    console.log('this is the String.prototype.testMethod');
};
var str = "this is test";
str.testMethod();

console.dir(String.prototype);

// 4.5.6 프로토타입도 자바스크립트 객체다
function Person3(name){
    this.name = name;
}
var foo = new Person3('foo');
// foo.sayHello();
Person3.prototype.sayHello = function(){
    console.log('Hello');
}
foo.sayHello();

// 4.5.7 프로토타입 메서드와 this 바인딩
function Person4(name){
    this.name = name;
}
Person4.prototype.getName = function(){
    return this.name;
};
var personFoo = new Person4(' foo');
console.log(personFoo.getName());

Person4.prototype.name = 'person';
console.log(Person4.prototype.getName());

// 4.5.8 디폴트 프로토타입은 다른 객체로 변경이 가능하다
function Person5(name){
    this.name = name;
}
console.log(Person5.prototype.constructor);

var personNick = new Person5('nick');
console.log(personNick.country);

Person5.prototype = {
    country : 'korea',
};
console.log(Person5.prototype.constructor);
var bar = new Person5('bar');

console.log(personNick.country);
console.log(bar.country);
console.log(personNick.constructor);
console.log(bar.constructor);

// 4.5.9 객체의 프로퍼티 읽기, 메서드 실행 시만 프로토타입체이닝 발생한다
function Person6(name){
    this.name = name;
}
Person6.prototype.country = 'korea';
var obj1 = new Person6('foo');
var obj2 = new Person6('bar');
console.log(obj1.country);
console.log(obj2.country);
obj1.country = 'USA';

console.log(obj1.country);
console.log(obj2.country);
