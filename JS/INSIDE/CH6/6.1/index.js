// 6.1 클래스, 생성자 메서드
function Person(arg){
  this.name = arg;
  this.getName = function(){
    return this.name;
  }
  this.setName = function(value){
    this.name = value;
  }
}
var me = new Person("zzon");
console.log(me.getName()); // zzon

me.setName("joon");
console.log(me.getName()); // joon

// prototype을 이용해 메모리 낭비 최소화
function PersonOop(arg){
  this.name = arg;
}
PersonOop.prototype.getName = function(){
  return this.name;
}
PersonOop.prototype.setName = function(){
  this.name = value;
}
var me = new PersonOop("me");
var you = new PersonOop("you");
console.log(me.getName());
console.log(you.getName());

// 메서드를 정의하는 방법
/*
Function.prototype.method = function(name, func){
  if(this.prototype[name]){
    this.prototype[name] = func;
  }
}
*/

// 위의 방식을 활용한 코드 적용 후
Function.prototype.method = function(name, func){
  this.prototype[name] = func;
}
function PersonDef(arg){
  this.name = arg;
}
PersonDef.method("setName", function(value){
  this.name = value;
});
PersonDef.method("getName", function(){
  return this.name;
});

var meDef = new PersonDef("me");
var youDef = new PersonDef("you");
console.log(meDef.getName());
console.log(youDef.getName());