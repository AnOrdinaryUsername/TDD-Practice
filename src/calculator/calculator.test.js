const calculator = require('./calculator').default;

describe('calculator', () => {
    it('should implement add, subtract, multiply, divide', () => {
        expect(calculator).toHaveProperty('add');
        expect(calculator).toHaveProperty('subtract');
        expect(calculator).toHaveProperty('multiply');
        expect(calculator).toHaveProperty('divide');
    });

    describe('add', () => {
        it('should be able work with 2 values', () => {
            expect(calculator.add(2, 3)).toEqual(5);
        });

        it('should be able to work with multiple values', () => {
            expect(calculator.add(10, 9, -4, 5, 6)).toEqual(26);
        });

        it('should be able to work with decimals', () => {
            expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
        });
    });

    describe('subtract', () => {
        it('should be able to work with 2 values', () => {
            expect(calculator.subtract(2, 3)).toEqual(-1);
        });

        it('should be able to work with multiple values', () => {
            expect(calculator.subtract(10, 9, -4, 5, 6)).toEqual(-6);
        });

        it('should be able to work with decimals', () => {
            expect(calculator.subtract(-0.1, -0.2)).toBeCloseTo(0.1);
        });
    });

    describe('multiply', () => {
        it('should be able to work with 2 values', () => {
            expect(calculator.multiply(2, 3)).toEqual(6);
        });

        it('should be able to work with multiple values', () => {
            expect(calculator.multiply(3, 5, 4, 2)).toEqual(120);
        });

        it('should be able to work with decimals', () => {
            expect(calculator.multiply(2.2, 1.2)).toBeCloseTo(2.64);
        });
    });

    describe('divide', () => {
        it('should be able to work with 2 values', () => {
            expect(calculator.divide(4, 2)).toEqual(2);
        });

        it('should be able to work with multiple values', () => {
            expect(calculator.divide(2, 4, 8)).toBe(0.0625);
        });

        it('should be able to work with decimals', () => {
            expect(calculator.divide(1.24 / 9.28)).toBeCloseTo(0.13, 2);
        });
    });
});
