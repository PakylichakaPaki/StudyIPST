function breakIntoBills(amount: number): { [key: number]: number } {
    const denominations = [100, 50, 10, 5, 2, 1];
    const result: { [key: number]: number } = {};

    denominations.forEach(bill => {
        const count = Math.floor(amount / bill);
        if (count > 0) {
            result[bill] = count;
            amount -= count * bill;
        }
    });

    return result;
}

const bills = breakIntoBills(1592);
console.log(bills);