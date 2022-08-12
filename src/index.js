module.exports = function reverse (num) {
    const negative = (num<0) ? true : false;
    const reversedNum=Number(Math.abs(num).toString().split("").reverse().join(""));

    return negative ? reversedNum : reversedNum;
}


