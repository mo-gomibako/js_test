let data = [1, 2, 3, 4, 5, 6];
let [x0, x1, x2, x3] = data;

let book = {
    title: "wagahai wa neko de aru",
    publish: "natume soseki",
    price: { name1: 2000, name2: 3000　}

};
// console.log(title);は表示されない！
console.log(book.title);
console.log(book.price.name2);
// console.log(book.name1);は使えない！

let { title } = book;
console.log(title);

let mo_data = {
    name: "mo",
    size: 158,
    weight: 50
};

for(let key in mo_data) {
    console.log(key + "=" + mo_data[key])
}

console.log(String);

ary = ["gomennasai", "ohayou"];

let data_split = [10, 15, 21, 23, 57];
console.log(...data_split);//10 15 21 23 57
console.log(Math.max(...data_split));//57
console.log(Math.max(data_split));//NaN

let [x4, x5, x6, ...other] = data_split;
console.log(x4, x5, x6, other);
other2 = [...other];
console.log(other);
console.log(other2 === other);

let data_str_split = ["a", "i", "u"];
console.log(...data_str_split);

ary_typetest1 = [[], [], []];
for(let i = 0; i < 3; i++) {
    ary_typetest1[i].push(1);
    ary_typetest1[i].push(1);
    console.log(ary_typetest1);
}