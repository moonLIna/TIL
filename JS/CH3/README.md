## CH3 - 자바스크립트 데이터 타입과 연산자

### 3.1 자바스크립트 기본 타입
  - null은 typeof시 결과가 object
  - null타입인지 확인할 때 일치 연산자(===)를 통해 변수 값을 직접 비교
  
### 3.2 자바스크립트 참조 타입(객체 타입)
  - delete 연산자는 객체의 프로퍼티를 삭제할 뿐, 객체 자체를 삭제하지는 못한다.

### 3.3 참조 타입의 특성
  - 참조 타입 객체는 객체를 참조하는 값을 저장하는 것
  - 동등 연산자(==)를 사용해 비교 시에도 참조 값을 비교(= 참조타입의 경우 참조값이 같아야 true)
  - 기본 타입과 참조 타입의 호출 방식 차이
    + 기본 타입은 값의 의한 호출, 인자로 값을 넘길 경우 호출된 함수의 매개변수로 복사된 값 전달
    + 참조 타입은 참조의 의한 호출, 참조값을 넘기기 때문에 인자로 넘긴 객체의 값 변경 가능
    
### 3.4 프로토타입
  - 모든 객체는 자신의 부모 역할을 하는 객체(프로토타입 객체)와 연결
  - 모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]라는 숨겨진 프로퍼티를 가짐
  - 모든 프로토타입 객체는 모든 객체에서 호출 가능한 JS 기본 내장 메서드를 포함
  ```javaScript
  var foo ={
    name : 'foo',
    age : 23
  };
  console.log(foo.toString()); //foo 객체에 toString메서드가 없지만 부모인 프로토타입객체에 정의되어 있으므로 상속받아 사용
  console.log(foo);
  ```
  - 부모 객체는 동적으로 변경 가능
  
### 3.5 배열
  - 배열의 크기는 현재 배열의 인덱스 중 가장 큰 값을 기준
  - 배열의 길이와 실제 메모리 할당은 동일하지 않음
  - 배열 메서드는 length 프로퍼티 기반으로 동작
  - 배열 역시 객체이지만 차이가 있음
     + 배열 역시 객체이기 때문에 typeof 결과는 object
     + 배열과 객체는 부모인 프로토타입 객체가 서로 다름
     + 배열 => Array.prototype => Object.prototype
     + 객체 => Object.prototype
     + 배열도 객체처럼 동적 프로퍼티 추가 가능
     ```javaScript
     var arr=[0,1,2];
     console.log(arr.length) // 3
     arr.name = 'numberArray';
     console.log(arr.length) // 3로 동적 프로퍼티 추가 시 length값 부동
     ```
  - for in => 모든 프로퍼티 열거 / 동적 프로퍼티도 출력 
  ```javaScript
  for (var prop in arr){
    console.log(prop, arr[prop]);
  } // 0 0, 1 1, 2 2, name numberArray
  for(var i = 0; i < arr.length; i++){
    console.log(i, arr[i]);
  } // 0 0, 1 1, 2 2
  ```
  - 배열의 값 삭제 시 delete 연산자, 요소 삭제 시 splice() 배열 메서드 
  - Array 생성자 함수는 호출 시 인자 개수에 따라 동작 상이
  ```javaScript
  var newArray = new Array(2);
  console.log(newArray, newArray.length); // [undefined, undefined] 2
  var numArray = new Array(0,1); // 배열 리터럴 방식이 더 적절
  console.log(numArray, numArray.length); // [0, 1] 2
  ```
  - 유사 배열 객체란 length 프로퍼티를 가진 객체
  ```javaScript
  var arr = ['bar'];
  var obj = {name : "foo", length : 1};
  
  arr.push('baz');
  console.log(arr); // ['bar', 'baz']
  
  Array.prototype.push.apply(obj, ['baz']);
  console.log(obj) // {'1': 'baz', name: 'foo', length : 2}
  ```
### 3.6 기본 타입과 표준 메서드
  - 기본 타입도 객체처럼 표준 메서드 호출
  - 기본값은 메서드 처리 순간 객체로 변환 => 타입별 표준 메서드 호출 => 기본값 복귀

### 3.7 연산자
  - typeof 결과
    + number, string, boolean, undefined, function, object
    + null, array도 object
  - !!연산자는 피연산자를 불린값으로 변환
  - object나 array는 비어있어도 true로 반환
