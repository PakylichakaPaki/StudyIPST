async function fetchDataWithFetch(url: string): Promise<any> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        throw error;
    }
}

(async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        const data = await fetchDataWithFetch(url);
        console.log("Данные успешно загружены:", data);
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
})();