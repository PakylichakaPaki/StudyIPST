function identicalLetters(str1: string, str2: string): string {
    const set1 = new Set(str1);
    
    const commonChars: string[] = [];
    
    for (const char of str2) {
        if (set1.has(char)) {
            commonChars.push(char);
        }
    }
    return Array.from(new Set(commonChars)).join('');
}

console.log(identicalLetters("herllo", "world"));
console.log(identicalLetters("abc", "def"));
console.log(identicalLetters("abc", "abc"));
