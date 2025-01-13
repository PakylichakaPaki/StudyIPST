function longestWord(str: string): string {
    const words = str.split(' ');
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
}

console.log(longestWord("I am a programmer"));
console.log(longestWord("The quick brown fox"));
console.log(longestWord("Hello world"));
