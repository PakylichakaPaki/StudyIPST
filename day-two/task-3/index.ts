function indexOf(str: string, substr: string): number {
    if (substr === '') return 0;
    if (substr.length > str.length) return -1;

    for (let i = 0; i <= str.length - substr.length; i++) {
        let match = true;
        for (let j = 0; j < substr.length; j++) {
            if (str[i + j] !== substr[j]) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }
    return -1;
}
console.log(indexOf("hello world", "world"));
console.log(indexOf("hello world", "xyz"));
console.log(indexOf("hello world", ""));
