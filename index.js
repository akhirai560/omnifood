var myName = "window";

function Foo() {
  (this.myName = "foo constructor"),
    (this.sayMyName = function () {
      console.log(this.myName);
    });
  this.obj1 = {
    myName: "obj1",
    sayMyName: function () {
      console.log(this.myName);
    },
    obj2: {
      myName: "obj2",
      sayMyName: function () {
        console.log(this.myName);
      },
    },
  };
}

let ff = new Foo();

console.log(ff.sayMyName());

console.log(ff.obj1.sayMyName());
console.log(ff.obj1.obj2.sayMyName());
