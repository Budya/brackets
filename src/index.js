module.exports = function check(str, bracketsConfig) {

    let paired = '()[]{}'.split('');
    let brackets = [];
    let tempArr = [];
    let unPair = [];
    let unPopen = [];
    let unPclose = [];
    let opening = [];
    let closing = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        if (i === 0) {
            brackets = brackets.concat(bracketsConfig[i]);
        } else {
            brackets = brackets.concat(bracketsConfig[i]);
        }
    }

    for (let i = 0; i < brackets.length; i++) {
        if (!paired.includes(brackets[i])) unPair.push(brackets[i]);
    }

    for (let i = 0; i < brackets.length; i++) {
        if (paired.includes(brackets[i])) {
            if (i === 0) {
                opening.push(brackets[i]);
            } else if (i % 2 !== 0) {
                closing.push(brackets[i]);
            } else {
                opening.push(brackets[i]);
            }
        }
        if (unPair.includes(brackets[i])) {
            if (i === 0) {
                unPopen.push(brackets[i]);
            } else if (i % 2 !== 0) {
                unPclose.push(brackets[i]);
            } else {
                unPopen.push(brackets[i]);
            }
        }
    }

    function checkTwoLast(arr) {
        if ((unPclose.indexOf(tempArr[tempArr.length - 1]) == unPopen.indexOf(tempArr[tempArr.length - 2])) &&
            unPopen.includes(tempArr[tempArr.length - 2])) {
            tempArr = tempArr.slice(0, arr.length - 2);
        }
        return tempArr;
    }

    function checkTwoLastPaired(arr) {
        if ((closing.indexOf(tempArr[tempArr.length - 1]) == opening.indexOf(tempArr[tempArr.length - 2])) &&
            opening.includes(tempArr[tempArr.length - 2])) {
            tempArr = tempArr.slice(0, arr.length - 2);
        }
        return tempArr
    }

    if (str.length % 2 !== 0) return false;

    for (let i = 0; i < str.length; i++) {
        tempArr.push(str[i]);
        if (tempArr.length > 1) checkTwoLastPaired(tempArr);
        if (tempArr.length > 1) checkTwoLast(tempArr);
    }

    return tempArr.length === 0 ? true : false;
}
