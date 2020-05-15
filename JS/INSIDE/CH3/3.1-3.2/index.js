document.getElementById("app").innerHTML += `
<h1>Inside JavaScript</h1>
<h3>3.1 - 3.2</h3>
`;
// 3.1.2 string
// 문자열은 문자 배열처럼 인덱스를 이용해서 접근이 가능하지만 인덱스를 이용해서는 수정이 불가능하다
var str = "test";
console.log(str[0], str[1], str[2], str[3]);
str = "TEST";
console.log(str);

// 3.1.4 null & undefined
var nullVar = null;
var undefinedVar;
console.log(typeof nullVar); // null의 타입은 object이므로 typeof가 아닌 ===연산자를 사용해야 한다
console.log(nullVar === null);
console.log(typeof undefinedVar); // undefined는 타입이자 값을 나타낸다

// 3.2.1.1 object()
var foo = new Object();
foo.name = "foo";
foo.age = 33;
foo.gender = "female";

console.log(typeof foo);
console.log(foo);

//3.2.1.2 {}
var foo2 = {
  name: "foodori",
  age: 22,
  gender: "male"
};
console.log(typeof foo2);
console.log(foo2);

// 3.2.2 객체프로퍼티 읽기/쓰기/갱신
var foo3 = {
  name: "foosuni",
  major: "cook"
};

console.log(foo3.name);
console.log(foo3["name"]);

foo3.major = "design";
console.log(foo3["major"]);

foo3["full-name"] = "foo tiger";
console.log(foo3["full-name"]);

// 3.2.3 for in loop
var prop;
for (prop in foo) {
  console.log(prop, foo[prop]);
}

// 3.2.4 delete object prop
var obj = {
  name: "nicole",
  nickname: "nico"
};

console.log(obj.nickname);
delete obj["nickname"];
/*delete obj; 해당 실행 시 오류*/
console.log(obj.nickname);
