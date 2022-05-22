const scores: number[] = [10,20,30];

function calcAverage(values: number[]) {
    let sum: number = 0;
    for (const value of values) {
        sum += value;
    }
    const avg: number = sum / values.length;
    return avg;
};

const averageScore: number = calcAverage(scores);

console.log(averageScore);