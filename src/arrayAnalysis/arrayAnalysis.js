const arrayAnalysis = (arr) => {
    const getMinMax = () => {
        let min = arr[0];
        let max = arr[0];
        let i = arr.length;

        while (i--) {
            min = arr[i] < min ? arr[i] : min;
            max = arr[i] > max ? arr[i] : max;
        }
        return { min, max };
    };

    const getAverage = () => {
        const total = arr.reduce((prev, current) => prev + current, 0);

        return {
            average: total / arr.length,
        };
    };

    return {
        ...getAverage(arr),
        ...getMinMax(arr),
        length: arr.length,
    };
};

export default arrayAnalysis;
