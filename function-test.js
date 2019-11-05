function getTriangle1(base, height) {
    console.log(arguments);
    if(base == undefined) { base = 1 }
    if(height == undefined) { height = 1}
    return base * height/2; 
}

console.log(getTriangle1(3));

let getTriangle2 =
    new Function (
        "base",
        "height",
        "console.log(arguments); return base * height / 2;"
    );
console.log(getTriangle2(5,2));

const getTriangle3 = (base, height) => {
    return base * height / 2;
};

console.log(getTriangle3(5,2));

function getnumber1() {
    let answer = 0;
    for(let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== "number") {
            throw new Error("数値を入力してください");
        }
        answer += aruments[i];
    }
    return answer;
}

try {
    console.log(getnumber1(1, 2, 3, 4, 5));
} catch(e) {
    console.log(e.message);
}