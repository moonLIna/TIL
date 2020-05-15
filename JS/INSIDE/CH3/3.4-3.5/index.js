// 3.4
var foo = { name: "foo", age: 23 };
console.log(foo.toString());
console.log(foo);

// 3.5
var colorArr = ["red", "orange", "white"];
console.log(colorArr[0]);
console.log(colorArr[1]);

var emptyArr = [];
emptyArr[0] = 100;
emptyArr[3] = "eight";
emptyArr[7] = true;
console.log(emptyArr);
console.log(emptyArr.length);

var arr = [];
arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;
console.log(arr.length);

var arrLength = [0, 1, 2];
console.log(arrLength.length);

arrLength.length = 5;
console.log(arrLength);

arrLength.length = 2;
console.log(arrLength);
console.log(arrLength[2]);

// 3.5.3.1
var arrPush = ["zero", "one", "two"];
arrPush.push("three");
console.log(arrPush);

arrPush.length = 5;
arrPush.push("four");
console.log(arrPush);

// 3.5.4 difference between Arr and Obj
var colorObj = {
  "0": "red",
  "1": "orange",
  "2": "white"
};
console.log(typeof colorArr);
console.log(typeof colorObj);

console.log(colorArr.length);
console.log(colorObj.length);
console.log(colorArr["0"]);

colorArr.push("yellow");
//colorObj.push("yellow");

var protoArr = [];
var protoObj = {};
console.dir(protoArr.__protp__);
console.dir(protoObj.__protp__);

// 3.5.5
arr.color = "blue";
arr.name = "num_array";
console.log(arr.length);
arr[5] = "red";

console.dir(arr);
arr.length = 5;

// 3.5.6
for (var prop in arr) {
  console.log(prop, arr[prop]);
}
for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// 3.5.7
delete arr[1];
console.log(arr);

var spliceArr = [0, 1, 2, 3, 4, 5];
spliceArr.splice(2, 1, "two");
console.log(spliceArr);

//3.5.8
var newArr = new Array(3);
console.log(newArr);
console.log(newArr.length);

var bar = new Array(1, 2, 3);
console.log(bar);
console.log(bar.length);

// 3.5.9
var arrObj = {
  name: "arrObj",
  length: 1
};
//arrObj.push("error");
Array.prototype.push.apply(arrObj, ["new"]);
console.log(arrObj);
