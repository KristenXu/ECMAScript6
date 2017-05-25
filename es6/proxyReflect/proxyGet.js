var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw new ReferenceError("Property \"" + property + "\" does not exist.");
    }
  }
});

proxy.name // "张三"
// proxy.age // 抛出一个错误

let proto = new Proxy({name: '123'}, {
  get(target, propertyKey, receiver) {
    console.log('GET '+propertyKey);
    return target[propertyKey];
  }
});

let obj = Object.create(proto);
console.log(obj.ww) // "undefiend"
console.log(obj.name) // "123"

//链式操作
var allFun = {
  double : n => n * 2,

  pow : n => n * n,

  reverseInt : n => n.toString().split("").reverse().join("") | 0
}
var pipe = (function () {
  return function (value) {
    var funcStack = [];
    var oproxy = new Proxy({} , {
      get : function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            return fn(val);
          },value);
        }
        funcStack.push(allFun[fnName]);
        return oproxy;
      }
    });

    return oproxy;
  }
}());


console.log(pipe(3).double.pow.reverseInt.get); // 63