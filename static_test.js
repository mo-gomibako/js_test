let Area = function() {};
Area.version = "1.0";

Area.triangle = function(base, height) {
    return base * height / 2;
};

Area.diamond = function(width, height) {
    return width * height / 2;
}

console.log("Areaクラスのバージョン:" + Area.version);
console.log(Area.diamond(1, 3));

let a = new Area();
console.log(a.diamond(1, 3));
//Area.diamondはオブジェクトAreaに追加された静的メソッド
//Q:コンストラクターとしての役割をはたしてないということ？