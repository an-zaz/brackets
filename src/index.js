function check(str, bracketsConfig) {
    let arr = str.split('');
    let stack = [];
    let second = [];
    for (let item of arr){
        if (item === second[1]){
            stack.pop();
            second = bracketsConfig.find(itemArr => itemArr[0] === stack[stack.length - 1]) || [];
            continue;
        }
        stack.push(item);
        second = bracketsConfig.find(itemArr => itemArr[0] === stack[stack.length - 1]) || [];
    }
    return !stack.length;
}


module.exports = check;
