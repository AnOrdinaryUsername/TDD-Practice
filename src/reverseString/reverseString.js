const reverseString = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Not a string!');
    }

    let newStr = '';
    let index = str.length;

    while (index--) {
        newStr += str[index];
    }

    return newStr;
};

export default reverseString;
