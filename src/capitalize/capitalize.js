const capitalize = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Not a string!');
    }

    return str[0].toLocaleUpperCase() + str.slice(1);
};

module.exports = capitalize;
