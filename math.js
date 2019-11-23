function add(a, b, myCallback) {
const result = a + b;
myCallback(result);
}

function sub(a, b, myCallback) {
    const result = a - b;
    myCallback(result);
}

module.exports = {
    add: add,
    sub: sub,
};