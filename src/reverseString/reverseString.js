const reverseString = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Not a string!');
    }

    let newStr = '';
    let index = str.length - 1;
    while (index >= 0) {
        newStr += str[index];
        index--;
    }

    return newStr;
};

export default reverseString;
