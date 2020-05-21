// 6.2.1 프로토타입을 이용한 상속
function create_object(o){
  function F(){}
  F.prototype = o;
  return new F();
}

var person = {
  name : 'joon',
  getName : function(){
    return this.name;
  },
  setName : function(arg){
    this.name = arg;
  }
};

var student = create_object(person);
student.setName("me");
console.log(student.getName());

// 자식에게 메서드 추가 예시
/*
student.setAge = function(age){
  this.age = age;
}
student.getAge = function(){
  return this.age;
}
student.setAge('25');

console.log(student.getAge());
*/
// 위의 코드의 경우 지저분하므로 extend() 함수로 추가
// ES6부터 가능
jQuery.extend = jQuery.fn.extend = function(obj, prop){
  if(!prop){prop = obj; obj = this};
  for(var i in prop) obj[i] = prop[i];
  return obj;
}

// 객체일 경우 깊은 복사
/*
for( ; i < length; i++){
  if((options = arguments[i]) != null){
    // extend the base object
    for (name in options){
      src = target[name];
      copy = options[name];

      // prevent never-ending loop
      if(target === copy){
        continue;
      }

      // Recurse if we're merging plain objects or arrays
      if(deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))){
        if(copyIsArray){
          copyIsArray = false;
          clone = src && jQuery.isArray(src) ? src : [];
        } else {
          clone = src && jQuery.isPlainObject(src) ? src : {};
        }

        // Never move original objects, clone them
        target[name] = jQuery.extend(deep, clone, copy);
      } else if (copy !== undefined){
        target[name] = copy;
      }
    }
  }
  // Return the modified objects
  return target;
}
*/
// extend 함수 사용 예시
/*
(function($){
  $.extend($.fn,{
    my_func : function(){
      // custom function 
    }
  })
})(jQuery);

$.my_func();
*/

function extend(obj, prop){
  if(!prop){prop = obj; obj = this;}
  for(var i in prop) obj[i] = prop[i];
  return obj;
}
var student2 = create_object(person);
var added = {
  setAge : function(age){
    this.age = age;
  },
  getAge : function(){
    return this.age;
  }
};
extend(student2, added);
student2.setAge('30');
console.log(student2.getAge());
console.log(student2);
console.log(student);

// 6.2.2 클래스 기반의 상속
function Person(arg){
  this.name = arg;
}
Person.prototype.setName = function(value){
  this.name = value;
};
Person.prototype.getName = function(){
  return this.name;
}
function Student(arg){
  Person.apply(this, arguments);
}
var you = new Person('jihoon');
Student.prototype = you;

var me = new Student('nick');
me.setName('nicolas');
console.log(me.getName());

// 부모클래스의 인스탄스와 자식 클래스의 인스탄스 분리 코드
function Person3(arg){
  this.name = arg;
}
Function.prototype.method = function(name, func){
  this.prototype[name] = func;
}
Person3.method("setName", function(value){
  this.name = value;
});
Person3.method("getName", function(){
  return this.name;
});
function Student3(arg){
}
function F3(){};
F3.prototype = Person3.prototype;
Student3.prototype = new F3();
Student3.prototype.constructor = Student3;
Student3.super = Person3.prototype;

var me3 = new Student3();
me3.setName('juju');
console.log(me3.getName());

// 즉시 실행 함수와 클로저를 활용한 상속관계 코드
var inherit = function(Parent, Child){
  var F = function(){};
  return function(Parent, Child){
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
  };
}();