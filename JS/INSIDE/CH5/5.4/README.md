# CH5 - 실행 컨텍스트와 클로저

## 5.4 클로저
### 5.4.1 클로저의 개념
  - 클로저 : 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수
  - 자유 변수 : 클로저로 참조되는 외부 변수
  - 클로저 사용한 코드가 그렇지 않은 코드보다 메모리 부담 큼
```javaScript
function outerFunc(){
  var local = 8;
  function innerFunc(innerArg){
    console.log((arg1 + arg2)/(local + innerArg));
  }
  return innerFunc;
}
var exam1 = outerFunc(2, 4);
exam1(2);
```

### 5.4.2 클로저의 활용
#### 5.4.2.1 특정 함수에 사용자가 정의한 객체의 메서드 연결하기

#### 5.4.2.2 함수의 캡슐화

#### 5.4.2.3 setTimeout()에 지정되는 함수의 사용자 정의

### 5.4.3 클로저를 활용할 때 주의사항
#### 5.4.3.1 클로저의 프로퍼티값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의해야 한다

#### 5.4.3.2 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우도 있다

#### 5.4.3.3 루프 안에서 클로저를 활용할 때는 주의하자
```javascript
function countSeconds(howMany){
  for(var i = 1; i <= howMany; i++){
    setTimeout(function(){
      console.log(i);
    }, i * 1000);
  }
};
countSeconds(3); // 4(3)

function countSeconds(howMany){
  for(var i = 1; i <= howMany; i++){
    (function(currentI){
      setTimeout(function(){
        console.log(currentI);
      }, currentI * 1000);
    }(i));
  }
};
countSeconds(3); // 1,2,3
```