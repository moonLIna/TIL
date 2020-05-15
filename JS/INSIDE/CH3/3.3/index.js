// 3.3 참조타입의 특성
var objA = { val: 40 };
var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 20;
console.log(objA.val);
console.log(objB.val);

// 3.3.1
var a = 100;
var b = 100;
var objAA = { value: 100 };
var objBB = { value: 100 };
var objCC = objBB;

console.log(a == b);
console.log(objAA == objBB);
console.log(objBB == objCC);

// 3.3.2 call by value / call by reference
function changeArg(num, obj) {
  num = 200;
  obj.value = 200;

  console.log("changeArg num " + num);
  console.log("changeArg objAA " + obj.value);
}
changeArg(a, objAA);
console.log(a);
console.log(objAA);
