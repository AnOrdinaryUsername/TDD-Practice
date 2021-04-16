const arrayAnalysis = require('./arrayAnalysis').default;

describe('arrayAnalysis', () => {
    it('should contain the properties, average, min, max, and length', () => {
        const testObject = arrayAnalysis([1, 2, 3, 4]);

        expect(testObject).toHaveProperty('average');
        expect(testObject).toHaveProperty('min');
        expect(testObject).toHaveProperty('max');
        expect(testObject).toHaveProperty('length');
    });

    it('should be able to find the average', () => {
        const testArray = [24, 48, 10];
        const { average } = arrayAnalysis(testArray);
        expect(average).toBeCloseTo(27.3, 1);
    });

    it('should be able to find the min', () => {
        const testArray = [24, 72, 34];
        const { min } = arrayAnalysis(testArray);
        expect(min).toBe(24);
    });

    it('should be able to find the max', () => {
        const testArray = [4, 9, 3];
        const { max } = arrayAnalysis(testArray);
        expect(max).toBe(9);
    });

    it('should be able to grab the length of the array', () => {
        const testArray = [2, 3, 4, 9, 1, 4];
        const { length } = arrayAnalysis(testArray);
        expect(length).toEqual(testArray.length);
    });
});
