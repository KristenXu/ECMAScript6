export default class Destructuring {
    constructor(name){
        this.name = name;
    }
    getResult() {
        var { foo: abc } = { foo: "aaa", bar: "bbb" };
        return(this.name);
    }

    binaryOctonary() {
        let binaryVal = 0b11;
        let octonaryVal = 0o11;
        return '二进制 0b11：' + binaryVal + ' 八进制 0o11：' + octonaryVal;
    }

    numberIsFiniteIsNaN() {

    }

    numberIsInteger() {
        let testInt = Number.isInteger(25);
        let testFloat = Number.isInteger(25.0);
        return `testInt：  ${testInt}  testFloat：${testFloat}`;
    }

    numberEPSILON() {

        function withinErrorMargin (left, right) {
          return Math.abs(left - right) < Number.EPSILON;
        }
        let testEqual = withinErrorMargin(0.1 + 0.2, 0.3);
        let testUnEqual = withinErrorMargin(0.2 + 0.2, 0.3);
        return `withinErrorMargin(0.1 + 0.2, 0.3) : ${testEqual}  withinErrorMargin(0.2 + 0.2, 0.3) : ${testUnEqual}`
    }

    numberIsSafeInterger() {
        let safe = Number.isSafeInteger(9007199254740990) // true
        let unsafe = Number.isSafeInteger(9007199254740992) // false
        return `lower than 2^53 (9007199254740990) : ${safe}  higher than 2^53  : ${unsafe}`
    }

    mathTrunc() {
        let positive = Math.trunc(4.9);
        let negative = Math.trunc(-4.9);
        return `Math.trunc(4.9) : ${positive}  Math.trunc(-4.9)  : ${negative}`
    }

    mathSign() {
        let positive = Math.sign(4.9);
        let negative = Math.sign(-4.9);
        return `Math.sign(4.9) : ${positive}  Math.sign(-4.9)  : ${negative}`
    }
}