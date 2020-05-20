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
student.setAge = function(age){
  this.age = age;
}
student.getAge = function(){
  return this.age;
}
student.setAge('25');

console.log(student.getAge());

// 위의 코드의 경우 지저분하므로 extend() 함수로 추가
// ES6부터 가능
jQuery.extend = jQuery.fn.extend = function(obj, prop){
  if(!prop){prop = obj; obj = this};
  for(var i in prop) obj[i] = prop[i];
  return obj;
}

// 객체일 경우 깊은 복사
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