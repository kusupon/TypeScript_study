"use strict";
const scores = [10, 20, 30];
function calcAverage(values) {
    let sum = 0;
    for (const value of values) {
        sum += value;
    }
    const avg = sum / values.length;
    return avg;
}
;
const averageScore = calcAverage(scores);
console.log(averageScore);
