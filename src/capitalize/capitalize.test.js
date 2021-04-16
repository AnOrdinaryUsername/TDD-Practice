const capitalize = require('./capitalize').default;

describe('capitalize', () => {
    it("should throw an error if the first argument isn't a string", () => {
        expect(() => capitalize(4)).toThrow();
    });

    it('should capitalize the first character', () => {
        const test = capitalize('test');
        expect(test[0]).toBe('T');
    });

    it('should not alter any other characters besides the first', () => {
        const original = 'this is a test';
        const result = capitalize(original);
        expect(result.substring(1, original.length - 1)).toEqual(
            original.substring(1, original.length - 1)
        );
    });
});
