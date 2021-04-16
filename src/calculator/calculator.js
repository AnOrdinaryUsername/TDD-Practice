const calculator = {
    add: function (...numbers) {
        return numbers.reduce((total, current) => total + current);
    },
    subtract: function (...numbers) {
        return numbers.reduce((total, current) => total - current);
    },
    divide: function (...numbers) {
        return numbers.reduce((total, current) => total / current);
    },
    multiply: function (...numbers) {
        return numbers.reduce((total, current) => total * current);
    },
};

export default calculator;
