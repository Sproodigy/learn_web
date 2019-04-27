// var x = 100;

var leftSide = (3.383 * 1000000 + 3.82229 * 1000000 - 1.39832 * 1000000);
var rightSide = '(3.3878 * 1000000 + 3.8339 * 1000000 - x)';
// console.log(eval(rightSide));
for (var x = -1000000; x <= 1000000; x++) {
//
//   // console.log(eval(leftSide, ' --- ', rightSide));
  if (leftSide == +eval(rightSide)) {
    console.log(leftSide / 1000000 + ' Equal!!! ' + +eval(rightSide) / 1000000);
    break;
  }
  else {
    console.log(leftSide / 1000000 + ' Not equal! ' + +eval(rightSide) / 1000000, ' -- ' + x);
  }
}


// var calculator = {
//
// read: function() {
//   this.a = +prompt('a?', 0);
//   this.b = +prompt('b?', 0);
// }
//
//   sum: function() {
//     return this.a + this.b;
//   },
//
//   mul: function() {
//     return this.a * this.b;
//   }
// }
//
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
