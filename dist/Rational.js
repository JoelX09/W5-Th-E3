"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
class Rational {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    printRational() {
        console.log('==================');
        console.log(`Operation: ${this.numerator} / ${this.denominator}`);
        console.log('==================');
    }
    invert() {
        let temp = this.numerator;
        this.numerator = this.denominator;
        this.denominator = temp;
    }
    toFloat() {
        return this.numerator / this.denominator;
    }
    reduce() {
        let A = this.numerator;
        let B = this.denominator;
        let R = 0;
        while (A !== 0 && B !== 0) {
            R = A % B;
            A = B;
            B = R;
        }
        if (A === 0) {
            this.numerator /= B;
            this.denominator /= B;
        }
        if (B === 0) {
            this.numerator /= A;
            this.denominator /= A;
        }
    }
}
exports.Rational = Rational;
