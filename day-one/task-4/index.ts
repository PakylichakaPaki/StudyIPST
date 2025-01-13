function runLengthEncoding(str: string): string {
    if (!str) return '';
    
    let result = '';
    let count = 1;
    let currentChar = str[0];

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === currentChar) {
            count++;
        } else {
            result += currentChar + count;
            currentChar = str[i];
            count = 1;
        }
    }

    return result;
}
function runLengthDecoding(str: string): string {
    let result = '';
    
    for (let i = 0; i < str.length; i += 2) {
        const char = str[i];
        const count = parseInt(str[i + 1]);
        result += char.repeat(count);
    }

    return result;
}
console.log(runLengthEncoding("AABBBCCCC"));
console.log(runLengthDecoding("A4B2C1"));