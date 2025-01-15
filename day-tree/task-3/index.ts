
function fetchFakeData(delay: number = 2000): Promise<Array<{ id: number; name: string; age: number; email: string; }>> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Павел", age: 25, email: "pavel@example.com" },
                { id: 2, name: "Анна", age: 30, email: "anna@example.com" },
                { id: 3, name: "Иван", age: 28, email: "ivan@example.com" },
            ]);
        }, delay);
    });
}

(async () => {
    console.log("Загрузка данных...");
    const data = await fetchFakeData();
    console.log("Данные успешно загружены:", data);
})();
