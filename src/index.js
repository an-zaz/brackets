module.exports = function check(str, bracketsConfig) {
    let open = bracketsConfig.map(item => item[0]);
    let close = bracketsConfig.map(item => item[1]);
    let arr = str.split('');
    let stack = [];

    for (let curr of arr) {
        let bracketIndex = close.findIndex(item => curr === item );
        if (bracketIndex !== -1) {
            if (open[bracketIndex] === close[bracketIndex]) {
                if (open[bracketIndex] === stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    stack.push(curr);
                }
                continue;
            }
            if (stack[stack.length - 1] !== open[bracketIndex]) {
                return false;
            }
            stack.pop();
            continue;
        }
        stack.push(curr);
    }
    return stack.length === 0;
};

