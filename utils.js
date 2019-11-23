function uniq(tab) {
    const result = [];
    for (let i = 0; i < tab.length; i++) {
        if (result.indexOf(tab[i]) === -1) {
            result.push(tab[i]);
        }
    }
    return result;
}

function diff(tabA, tabB) {
    const result = [];
    for (let i = 0; i < tabA.length; i++) {
if (tabB.indexOf(tabA[i]) === -1) {
    result.push(tabA[i]);
}        
    }
    return result;
}


module.exports = {
    uniq: uniq,
    diff: diff,
};