export default class PostfixNotationExpression {

    private static readonly operators = ["(", ")", "+", "-", "x", "/", "^", "%", "@"];

    private static separate(input: string) {
        let pos = 0;
        const result: string[] = [];
        while (pos < input.length) {
            let s = '' + input[pos];
            if (!this.operators.includes(input[pos])) {
                if (!isNaN(parseFloat(input[pos]))) {
                    for (let i = pos + 1; i < input.length && (!isNaN(parseFloat(input[i])) || input[i] === ',' || input[i] === '.'); i++) {
                        s += input[i];
                    }
                    //isLetter
                } else if (isNaN(parseFloat(input[pos]))) {
                    for (let i = pos + 1; i < input.length && (isNaN(parseFloat(input[i])) || !isNaN(parseFloat(input[i]))); i++) {
                        s += input[i];
                    }
                }
            }
            result.push(s);
            pos += s.length;
        }
        return result;
    }

    private static getPriority(s: string) {
        switch (s) {
            case "(":
            case ")":
                return 0;
            case "+":
            case "-":
                return 1;
            case "x":
            case "/":
                return 2;
            case "^":
            case "%":
                return 3;
            case "@":
                return 4;
            default:
                return 5;
        }
    }

    private static convertToPostfixNotation(input: string) {
        const outputSeparated: string[] = [];
        const stack = new Stack();
        for (const c of this.separate(input)) {
            if (this.operators.includes(c)) {
                if (stack.count > 0 && c !== "(") {
                    if (c === ")") {
                        let s = stack.pop();
                        while (s !== "(") {
                            outputSeparated.push(s);
                            s = stack.pop();
                        }
                    } else if (this.getPriority(c) > this.getPriority(stack.peek)) {
                        stack.push(c);
                    } else {
                        while (stack.count > 0 && (this.getPriority(c) <= this.getPriority(stack.peek) || stack.peek === '@')) {
                            outputSeparated.push(stack.pop());
                        }
                        stack.push(c);
                    }
                } else {
                    stack.push(c);
                }
            } else {
                outputSeparated.push(c);
            }
        }
        while (stack.count > 0)
            outputSeparated.push(stack.pop());

        return outputSeparated;
    }

//     ???????? ???????? ?????? ?????????????? ?????? ????????????:
//         ???????????? ?????????????????? ????????????.
//     ???????? ???????????? ???????????????? ???????????? ?????? ?????????????????????? ???????????????? (????????????????, ! ??? ??????????????????), ?????????????????? ?????? ?? ???????????????? ????????????.
//     ???????? ???????????? ???????????????? ???????????????????? ???????????????? (????????????????, sin ??? ??????????), ???????????????? ?????? ?? ????????.
//     ???????? ???????????? ???????????????? ?????????????????????? ??????????????, ???????????????? ?????? ?? ????????.
//     ???????? ???????????? ???????????????? ?????????????????????? ??????????????:
//         ???? ?????? ??????, ???????? ?????????????? ?????????????????? ?????????? ???? ???????????? ?????????????????????? ????????????, ?????????????????????? ???????????????? ???? ?????????? ?? ???????????????? ????????????. ?????? ???????? ?????????????????????? ???????????? ?????????????????? ???? ??????????, ???? ?? ???????????????? ???????????? ???? ??????????????????????. ???????? ???????? ???????????????????? ????????????, ?????? ???? ?????????????????? ?????????????????????? ????????????, ?????? ????????????????, ?????? ?? ?????????????????? ???????? ?????????????? ?????????????????? ??????????????????????, ???????? ???? ?????????????????????? ????????????.
//     ???????? ???????????????????? ???????????? ???????? ????????????, ?????????????????? ???????????????? ???????????? ?????????? ?????????????????????????????? ???? ????????????. ???????? ??????????-???? ???????????? ???????????????????????? ???????????????? ?????????????????? (????????????????, [x] ??? ?????????? ??????????), ?????????????????? ?? ???????????????? ???????????? ???????????? ???????? ??????????????.
//
//     ???????? ???????????? ???????????????? ???????????????? ?????????????????? ??1, ??????????:
//         1) ???????? ???? ?????????????? ?????????? ???????????????????? ?????????????????
//              ??? ?????? ???????????????? ???? ?????????????? ?????????? ???????????????????????? o1
//              ??? ?????? ???????????????? ???? ?????????????? ?????????? ?????????????????????????????????? ?? ?????????????????????? ?????? ?? o1
//              ??? ?????????????????????? ?????????????? ?????????????? ?????????? ?? ???????????????? ????????????;
//          2) ???????????????? ???????????????? o1 ?? ????????.
//     ?????????? ?????????????? ???????????? ??????????????????????, ?????????????????????? ?????? ?????????????? ???? ?????????? ?? ???????????????? ????????????. ?? ?????????? ???????????? ???????? ???????????????? ???????????? ?????????????? ????????????????; ???????? ?????? ???? ??????, ???????????? ?? ?????????????????? ???? ?????????????????????? ????????????.

    static result(input: string) {
        const stack = new Stack();
        const queue = this.convertToPostfixNotation(input);
        let str = queue.shift();

        while (queue.length >= 0 && str) {
            if (!this.operators.includes(str)) {
                stack.push(str);
                str = queue.shift();
            } else {
                let summ = 0;
                try {
                    switch (str) {

                        case "+": {
                            const a = parseFloat(stack.pop());
                            const b = parseFloat(stack.pop());
                            summ = a + b;
                            break;
                        }
                        case "-": {
                            const a = parseFloat(stack.pop());
                            const b = parseFloat(stack.pop());
                            summ = b - a;
                            break;
                        }
                        case "x": {
                            const a = parseFloat(stack.pop());
                            const b = parseFloat(stack.pop());
                            summ = b * a;
                            break;
                        }
                        case "/": {
                            const a = parseFloat(stack.pop());
                            const b = parseFloat(stack.pop());
                            summ = b / a;
                            break;
                        }
                        case "^": {
                            const a = parseFloat(stack.pop());
                            const b = parseFloat(stack.pop());
                            summ = Math.pow(b, a);
                            break;
                        }
                        case "%": {
                            const a = parseFloat(stack.pop()) / 100;
                            if (queue.length === 0) {
                                summ = a;
                            } else {
                                if (queue[queue.length - 1] === '+' || queue[queue.length - 1] === '-') {
                                    const b = parseFloat(stack.pop());
                                    stack.push(b.toString());
                                    summ = b * a;
                                } else if (queue[queue.length - 1] === 'x') {
                                    summ = a;
                                }
                            }
                            break;
                        }
                        case "@": {
                            const a = parseFloat(stack.pop());
                            const b = parseFloat(stack.pop());
                            summ = b - a;
                            break;
                        }
                    }
                } catch (ex: any) {
                    console.error(ex.message);
                }
                stack.push(summ.toString());
                if (queue.length > 0)
                    str = queue.shift();
                else
                    break;
            }

        }
        const result = parseFloat(stack.pop());

        if (!isNaN(result)) {
            let text = result.toString();
            const pointIndex = text.indexOf('.');
            if (pointIndex !== -1) {
                const k = Math.pow(10, Math.min(Math.max(15 - pointIndex, 6),9));
                text = (Math.round(result * k) / k).toString();
            }
            return text;
        }
    }
}

class Stack extends Array {

    get count() {
        return this.length;
    }

    get peek() {
        return this[this.length - 1];
    }
}
