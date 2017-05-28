Proxy(target, {
    set: function(target, name, value, receiver) {
        var success = Reflect.set(target,name, value, receiver);
        if (success) {
            log('property ' + name + ' on ' + target + ' set to ' + value);
        }
        return success;
    }
});

var loggedObj = new Proxy(obj, {
    get(target, name) {
        console.log('get', target, name);
        return Reflect.get(target, name);
    },
    deleteProperty(target, name) {
        console.log('delete' + name);
        return Reflect.deleteProperty(target, name);
    },
    has(target, name) {
        console.log('has' + name);
        return Reflect.has(target, name);
    }
});
