// 6.3 캡슐화
var Person = function(arg){
  var name = arg ? arg : "zuni";
  this.getName = function(){
    return name;
  }
  this.setName = function(arg){
    name = arg;
  }
};
var me = new Person();
console.log(me.getName());
me.setName('jino');
console.log(me.getName());

// 캡슐화 코드 수정본
var Person2 = function(arg){
  var name = arg ? arg : 'hoon';

  return {
    getName : function(){
      return name;
    },
    setName : function(){
      name = arg;
    }
  };
};
var me2 = new Person2();
console.log(me2.getName());

// 위 코드의 문제점을 보여주는 예시
var ArrCrate = function(arg){
  var arr = [1,2,3];

  return {
    getArr : function(){
      return arr;
    }
  };
}
var obj = ArrCrate(); /* or var me = new Person(); */
var arr = obj.getArr();
arr.push(5);
console.log(obj.getArr());

// Person2 수정 코드 / 함수로 반환
var Person3 = function(arg){
  var name = arg ? arg : 'nick';
  var Func = function(){}
  Func.prototype = {
    getName : function(){
      return name;
    },
    setName : function(arg){
      name = arg;
    }
  };
  return Func;
}();

var me3 = new Person3();
console.log(me3.getName());
