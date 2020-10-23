module.exports = function reverse(n) {
    const strN = n.toString();
    let result = '';

    for (let i = strN.length - 1; i >= 0; i--) {
        result += strN[i];
    }

    return parseInt(result);
}
