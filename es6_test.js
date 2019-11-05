let num = 0;
let member = {
  ["man" + ++num]: "社長",
  ["man" + ++num]: "課長"
};

console.log(member);

class Test {
  constructor(num, name) {
    this.num = num;
    this.name = name;
  }
}

result = new Test(1, "mo");
console.log(result);

function makeInstance() {
  return new Test(2, "nino");
}

async function no
console.log((await setTimeout(makeInstance(), 1000)).name);
