const reverseString = require('./reverseString').default;

describe('reverseString', () => {
    it('should only take strings', () => {
        expect(() => reverseString(24)).toThrow();
    });

    it('should be able to reverse a single word', () => {
        expect(reverseString('test')).toEqual('tset');
    });

    it('should be able to reverse multiple words', () => {
        expect(reverseString('very good')).toEqual('doog yrev');
    });

    it('should work with non-alphanumeric characters', () => {
        expect(reverseString('!./')).toEqual('/.!');
    });
});
