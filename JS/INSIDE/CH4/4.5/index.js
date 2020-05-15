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