var calculator = {

read: function() {
  this.a = +prompt('a?', 0);
  this.b = +prompt('b?', 0);
}

  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
