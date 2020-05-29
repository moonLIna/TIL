// 7.3.2 커링
function calculate(a, b, c){
  return a * b + c;
}
function curry(func){
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
    return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
  }
}
function curry2(func){
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
    var arg_idx = 0;
    for(var i = 0; i < args.length && arg_idx < arguments.length; i++){
      if(args[i] === undefined){args[i] = arguments[arg_idx++]};
    }
    return func.apply(null, args);
  }
}
var new_func1= curry(calculate);
console.log(new_func1(1, 2, 3));
var new_func2= curry(calculate, 1, 3);
console.log(new_func2(3));
var new_func3 = curry2(calculate, 1, undefined, 4);
console.log(new_func3(3));

// 7.3.3 bind
Function.prototype.bind = function(thisArg){
  var fn = this,
    slice = Array.prototype.slice,
    args = slice.call(arguments, 1);

  return function(){
    return fn.apply(thisArg, args.concat(slice.call(arguments)));
  };
}

var print_all = function(arg){
  for(var i in this) console.log( i + " : " + this[i] );
  for(var i in arguments) console.log( i + " : " + arguments[i] );
}
var myobj = {name : 'nick'};
var myFunc = print_all.bind(myobj);
myFunc(); // name : nick

var myfunc1 = print_all.bind(myobj, 'iam joon', 'others');
myfunc1('insideJS');
/* 
  name : nick 
  0 : iam joon 
  1 : others 
  2 : insideJS
*/

// 7.3.4 rapper
function wrap(object, method, wrapper){
  var fn = object[method];
  return object[method] = function(){
    // return wrapper.apply(this, [fn].concat(
    return wrapper.apply(this, [fn.bind(this)].concat(
      Array.prototype.slice.call(arguments)
    ));
  };
}
Function.prototype.original = function(value){
  this.value = value;
  console.log( 'value : ' + this.value);
}

var mywrap = wrap(Function.prototype, "original", function(origin_func, value){
  this.value = 20;
  origin_func(value);
  console.log("wrapper value : " + this.value);
});
var obj = new mywrap('hoon');
/* 
1. mywrap으로 obj생성.
2. mywrap은 wrap 실행, 인자값 3개 전달
3. Function.prototype.original에 기존 함수를 wrapper 인자값으로 전달된 함수로 대신 실행
4. wrap에서 fn과 this bind O => wrapper value : hoon
5. wrap에서 fn과 this bind X => wrapper value : 20
*/

// 7.3.5 반복 함수
// 7.3.5.1 each
function each(obj, fn, args){
  if (obj.length == undefined) {
    for (var i in obj) 
      fn.apply( obj[i], args || [i, obj[i]] );
  } else {
    for (var i = 0; i < obj.length; i++)
      fn.apply(obj[i], args || [i, obj[i]]);
  }
  return obj;
};
each([1,2,3], function(idx, num){
  console.log(idx + ": " + num);
});
var nicolas = {
  name : "nicolas",
  age : 30,
  sex : "male",
};
each(nicolas, function(idx, value){
  console.log(idx + ": " + value);
});

// 7.3.5.2 map
Array.prototype.map = function(callback){
  // this가 null인지, 배열인지 체크
  // callback이 함수인지 체크
  var obj = this,
    value,
    mapped_value,
    A = new Array(obj.length);
  
  for(var i = 0; i < obj.length; i++){
    value = obj[i];
    mapped_value = callback.call(null, value);
    A[i] = mapped_value;
  }
  return A;
};
var arr = [1,2,3];
var new_arr = arr.map(function(value){
  return value * value;
});

console.log(new_arr);

// 7.3.5.3 reduce
Array.prototype.reduce = function(callback, memo){
  // this가 null인지, 배열인지 체크
  // callback이 함수인지 체크
  var obj = this,
    value,
    accumulated_value = 0;

  for(var i = 0; i < obj.length; i++){
    value = obj[i];
    accumulated_value = callback.call(null, accumulated_value, value);
  }

  return accumulated_value;
};
var accumulated_val = arr.reduce(function(a,b){
  return a + b * b;
});
console.log(accumulated_val);