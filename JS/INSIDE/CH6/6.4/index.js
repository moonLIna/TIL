// 6.4 객체지향 프로그래밍 응용 예제
// 6.4.1 클래스의 기능을 가진 subClass 함수
// 6.4.1.1 subClass 함수 구조
/*
var SuperClass = subClass(obj);
var SubClass = SuperClass.subClass(obj);
*/

var subClass = function(){
  // 1. 자식 클래스(함수 객체) 생성
  //var parent = this;
  /* 위의 코드 보완
  if(this === window){
    var parent = Function;
  }else{
    var parent = this;
  } */
  /* 최종 정리본 */
  var F = function(){};
  var subClass = function(obj){
    var parent = this === window ? Function : this; // node.js의 경우 global
    var child = function(){
      var _parent = child.parent;
      if(_parent && _parent !== Function){
        _parent.apply(this, arguments);
      }
      if(child.prototype._init){
        child.prototype._init.apply(this, arguments);
      }
    };
    // 2. 생성자 호출
    // 3. 프로토타입 체인을 활용한 상속 구현
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent;
    child.parent_constructor = parent;

    child.subClass = arguments.callee;
    // 4. obj를 통해 들어온 변수 및 메서드를 자식 클래스에 추가
    for(var i in obj){
      if(obj.hasOwnProperty(i)){
        child.prototype[i] = obj[i];
      }
    }
    return child;
  }
  // 5. 자식 함수 객체 반환
  return subClass;
}();

// 6.4.1.3 자식 클래스 확장
// extend 함수 역할을 하는 코드
/*
for(var i in obj){
  if(obj.hasOwnProperty(i)){
    child.prototype[i] = obj[i];
  }
}
*/
o = new Object();
o.prop = 'exists';
console.log(o.hasOwnProperty('prop'));
console.log(o.hasOwnProperty('toString')); // prototype 체인 타고 올라가지 않음
console.log(o.hasOwnProperty('hasOwnProperty')); // prototype 체인 타고 올라가지 않음

// 6.4.1.4 생성자 호출
var child = function(){
  if(parent._init){
    parent._init.apply(this, arguments);
  }
  if(child.prototype._init){
    child.prototype._init.apply(this, arguments);
  }
};

// _init 프로퍼티가 없을 때 프로토타입 체인 예방 코드
var child2 = function(){
  if(parent.hasOwnProperty("_init")){
    parent._init.apply(this, arguments);
  }
  if(child.prototype.hasOwnProperty("_init")){
    child.prototype._init.apply(this, arguments);
  }
};

var child3 = function(){
  var _parent = child.parent_constructor;
  if(_parent && _parent !== Function){
    /* 현재 클래스의 부모 생성자가 있으면 그 함수를 호출한다.
     다만 부모가 Function인 경우는 최상위 클래스에 도달했으므로 
     실행하지 않는다. */
     _parent.apply(this, arguments); // 부모 함수의 재귀적 호출
  }
  if(child.prototype.hasOwnProperty("_init")){
    child.prototype._init.apply(this, arguments);
  }
};

// 6.4.1.6 subClass 활용
var person_obj = {
  _init : function(){
    console.log("person init");
  },
  getName : function(){
    return this._name;
  },
  setName : function(name){
    this._name = name;
  }
};

var student_obj = {
  _init : function(){
    console.log("student init");
  },
  getName : function(){
    return "student name : " + this._name;
  }
};

var Person = subClass(person_obj); // Person 클래스 정의
var person = new Person(); // person init 출력
person.setName("zunha");
console.log(person.getName()); // zunha

var Student = Person.subClass(student_obj);
var student = new Student();
student.setName("i am a zunha");
console.log(student.getName()); // student name : i am a zunha

console.log(Person.toString()); // Person이 Function을 상속받는지 확인
/*
function(){
  var _parent = child.parent;
  if(_parent && _parent !== Function){
    _parent.apply(this, arguments);
  }
  if(child.prototype._init){
    child.prototype._init.apply(this, arguments);
  }
}
*/

// 6.4.2 subClass 함수와 모듈 패턴을 이용한 객체지향 프로그래밍
var personModule = function(arg){
  var name = undefined;
  return {
    _init : function(arg){
      name = arg ? arg : 'jihoon';
    },
    getName : function(){
      return name;
    },
    setName : function(arg){
      name = arg;
    }
  };
}

PersonModule = subClass(personModule());
var iamjihoon = new PersonModule("iamjihoon");
console.log(iamjihoon.getName());

Student = PersonModule.subClass();
var studentModule = new Student("student");
console.log(studentModule.getName());