let Member = function(num) {
    this.number = num;
    // this.prototype.getNumber = function() {
    //     return this.number * this.number
    // };
    // Q:上記のようにprototypeメソッドに追加することはできない？
    // A:
}

Member.prototype.getNumber = function() {
    return this.number * this.number;
}

let mem = new Member(3);
console.log(mem.getNumber());
console.log(typeof mem);
console.log(typeof Member);
console.log(Member.prototype);

let obj_test = {};
console.log(obj_test.prototype);

let Animal = function() {};

Animal.prototype = {
    walk : function() {
        console.log("トコトコ");
    }
};

let Dog = function() {};

Dog.prototype = new Animal();
// Q:Dog.prototype.animal = new Animal();だと参照してくれないのはなぜ？
// A:prototypeが書き換えられてしまうから

Dog.prototype.bark = function() {
    console.log("わんわん");
}

let d = new Dog();
d.walk();
d.bark();
console.log(Dog.prototype);

let Prototype_test = function() {};
let p = new Prototype_test();
console.log(p.constructor);

//ちなみに、d.constructor === Object
//これはDogコンストラクターのprototypeプロパティを上書き(33行)したから、Object.prototypeを参照したことに由来
//これからわかる仕組みは以下の通り
//関数を作成>>prototypeプロパティ作成>>constructorプロパティ作成