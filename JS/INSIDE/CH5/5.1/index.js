// 5.1 실행 컨텍스트 개념
console.log('this si global context');
function ExContext1(){
  console.log('this is ExContext1');
};
function ExContext2(){
  ExContext1();
  console.log('this is ExContext2');
};
ExContext2();