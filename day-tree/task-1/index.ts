function PromiseFunction(delay: number, message: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

//задержка 2 секунды
PromiseFunction(2000, "2 секунды!")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Произошла ошибка:", error);
    });

//задержка 5 секунды
PromiseFunction(5000, "5 секунд!")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Произошла ошибка:", error);
    });
