interface User {
    name: string;
    email: string;
    isActive: boolean;
}

async function cleanUserData(users: User[]): Promise<User[]> {
    // Мои любимые 10%
    if (Math.random() < 0.1) {
        throw new Error("Random error occurred!");
    }

    return users
        .filter(user => user.isActive) // проверка на активность
        .map(user => ({
            ...user,
            name: user.name.trim().toLowerCase(), // вырезаем пробелы и делаем нижний регистр
            email: user.email.toLowerCase() // только нижний регистр
        }));
}

(async () => {
    const users: User[] = [
        { name: "  John Doe ", email: "JOHN@EXAMPLE.COM", isActive: false },
        { name: "Jane Doe", email: "jane@example.com", isActive: true },
        { name: " Alice ", email: "ALICE@EXAMPLE.COM", isActive: true }
    ];

    try {
        const cleanedUsers = await cleanUserData(users);
        console.log(cleanedUsers);
    } catch (error) {
        console.error("Error:", error.message);
    }
})();