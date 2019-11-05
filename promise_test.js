class MyPromise {
  constructor(fn) {
    const resolve = result => {
      this.nextpromise = this.cb(result);
    };
    fn(resolve);
  }

  then(cb) {
    this.cb = cb;
    // return new MyPromise(resolve => {
    //   this.nextpromise.then(resolve);
    // });
  }
}

const sleep = () =>
  new MyPromise(resolve => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });

sleep().then(value => {
  console.log(value);
});
//   .then(value => {
//     console.log(value);
//     return sleep();
//   });
