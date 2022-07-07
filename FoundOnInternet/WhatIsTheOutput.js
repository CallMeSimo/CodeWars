// What is the output?
var num = 4;

function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 3;
    console.log(num);
  }
  inner();
}
outer();

/* Answer 3, quite easy actually. The "num = 4, "num = 2" and "num++" are disctrations */
