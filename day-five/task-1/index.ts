function playGame(player: string): { player: string; computer: string; result: string } {
    const choices = ["Камень", "Ножницы", "Бумага"] as const;
    const computer = choices[Math.floor(Math.random() * choices.length)];

    if (!choices.includes(player as any)) {
        throw new Error("Выберите один из вариантов: Камень, Ножницы, Бумага");
    }

    let result: string;

    if (player === computer) {
        result = "Ничья!";
    } else if (
        (player === "Камень" && computer === "Ножницы") ||
        (player === "Ножницы" && computer === "Бумага") ||
        (player === "Бумага" && computer === "Камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }

    return { player, computer, result };
}

const gameResult = playGame("Камень");
console.log(gameResult);


// console.log("----------------------------");

// const gameResult_Error = playGame("sdfg");
// console.log(gameResult_Error);