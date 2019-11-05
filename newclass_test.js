class Calculate {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  getSummation() {
    return this.num1 + this.num2;
  }

  getDifference() {
    return this.num1 - this.num2;
  }

  getProduct() {
    return this.num1 * this.num2;
  }

  getQuotient() {
    return this.num1 / this.num2;
  }
}

let cal = new Calculate(5, 8);
console.log(cal.getSummation());
console.log(getSummation());

console.log(typeof Calculate);
console.log(cal.constructor);
console.log(cal.num2);
console.log(typeof cal);
console.log(cal);
//　結果　Calculate { num1: 5, num2: 8 }
console.log(Calculate.prototype);
console.log(Calculate["prototype"]);
// 結果　Calculate {}
console.log(JSON.stringify(cal.__proto__));
