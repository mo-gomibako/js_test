array = [1, 2, 3];
//console.log(array.next()); 結果: array.next is not a function（arrayはイテラブルだがイテレーターでは無い）

iterator = array[Symbol.iterator]();
result1 = iterator.next();
console.log(result1);
result2 = iterator.next();
console.log(result2);
// 結果: { value: 1, done: false }
