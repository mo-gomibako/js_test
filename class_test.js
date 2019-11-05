const Calculate = function(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}

Calculate.prototype = {
    getSummation : function() {
        return this.num1 + this.num2;
    },
    getDifference : function() {
        return this.num1 - this.num2;
    },
    getProduct : function() {
        return this.num1 * this.num2;
    },
    getQuotient : function() {
        return this.num1 / this.num2; 
    }
}
const cal = new Calculate(3, 4);
console.log(cal);
// 結果　{ num1: 3, num2: 4 }

console.log(Calculate.prototype);
console.log(Calculate["prototype"]);

/* 結果　
{
  getSummation: [Function: getSummation],
  getDifference: [Function: getDifference],
  getProduct: [Function: getProduct],
  getQuotient: [Function: getQuotient]
}
*/

console.log(cal.constructor);

console.log(cal.getDifference());
// 結果　-1

for(let key in cal) {
    console.log(cal[key]);
}