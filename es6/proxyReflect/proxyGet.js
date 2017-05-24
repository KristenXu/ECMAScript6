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