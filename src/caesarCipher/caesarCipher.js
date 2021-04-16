const caesarCipher = (str, shift) => {
    return str
        .split('')
        .map((char) => transpose(char, shift))
        .join('');
};

const codeSet = (code) => (code < 97 ? 65 : 97);
const mod = (n, m) => ((n % m) + m) % m;

const transpose = (char, shift) => {
    const code = char.charCodeAt();
    let isUpperCase = false;

    if (char === char.toUpperCase()) {
        isUpperCase = true;
    }

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        const result = String.fromCharCode(mod(code + shift - codeSet(code), 26) + codeSet(code));

        if (isUpperCase) {
            return result.toUpperCase();
        }

        return result;
    }
    return char;
};

export default caesarCipher;
