function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function randomRange(size) {
    var current = 0;
    var arr = []
    while (current < size) {
        var num = getRandomNumber(99999)
        arr.push(num)
        current++;
    }

    return arr;
}

module.exports = randomRange;