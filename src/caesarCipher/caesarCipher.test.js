const caesarCipher = require('./caesarCipher').default;

describe('caesarCipher', () => {
    it('should transpose character correctly', () => {
        const cipher = 'zack';
        expect(caesarCipher(cipher, 5)).toEqual('efhp');
    });

    it('should preserve casing when transposing', () => {
        const cipher = 'LmAO';
        expect(caesarCipher(cipher, 5)).toEqual('QrFT');
    });

    it('should not change punctuation or numbers', () => {
        const cipher = '/.!24';
        expect(caesarCipher(cipher, 10)).toEqual(cipher);
    });
});
