module.exports = function toReadable(number) {
    let obj = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'hundred',
        '1000': 'thousand',

    }
    if (number <= 20) {
        return obj[number];
    }
    if (number < 100) {
        let NumString = number.toString()
        if (NumString[1] === '0') {
            return obj[number]
        } else {
            return obj[NumString[0] + '0'] + ' ' + obj[NumString[1]]
        }
    }
    if (number < 1000) {
        let NumberString = number.toString()
        if (NumberString[1] === '0' && NumberString[2] === '0') {
            return obj[NumberString[0]] + ' ' + obj[100]
        } else {
            let tens = toReadable(+NumberString.slice(1))
            return obj[NumberString[0]] + ' ' + obj[100] + ' ' + tens
        }
    }
};
        


