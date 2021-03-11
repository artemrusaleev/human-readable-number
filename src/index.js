module.exports = function toReadable(number) {
    const numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const digit = Math.floor(number % 10);
    const decimal = Math.floor((number % 100) / 10) * 10;
    const hundreds = Math.floor(number / 100);

    let result, final;
    ({ final, result } = readebleNumber(
        hundreds,
        result,
        numbers,
        decimal,
        digit
    ));
    return final;
};
function readebleNumber(hundreds, result, numbers, decimal, digit) {
    if (hundreds != 0) {
        result = numbers[hundreds] + " hundred ";
    } else result = "";

    if (decimal > 10) {
        if (digit == 0) {
            result = result + "" + numbers[decimal];
        } else result = result + "" + numbers[decimal] + " " + numbers[digit];
    } else if (decimal == 10) {
        if (digit == 0) {
            result = result + "" + numbers[decimal];
        } else result = result + "" + numbers[decimal + digit];
    } else if (result == "") {
        result = result + "" + numbers[digit];
    } else if (digit != 0) {
        result = result + "" + numbers[digit];
    } else result = result.slice(0, -1);
    return { final: result, result };
}
