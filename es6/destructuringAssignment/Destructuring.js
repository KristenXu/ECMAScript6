export default class Destructuring {
    constructor(name){
        this.name = name;
    }
    getResult() {
        var { foo: abc } = { foo: "aaa", bar: "bbb" };
        return(this.name);
    }
}