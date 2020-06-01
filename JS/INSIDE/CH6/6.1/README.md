# CH6 - 객체지향 프로그래밍

## 6.1 클래스, 생성자, 메서드
  - 더글라스 크록포드 메서드 정의 방법
```javascript
Function.prototype.method = function(name, func){
  if(!this.prototype[name]){
    this.prototype[name] = func;
  }
}
```

## 6.2 상속
### 6.2.1 프로토타입을 이용한 상속
```javascript
function create_object(o){
  function F(){}
  F.prototype = o;
  return new F();
}
```