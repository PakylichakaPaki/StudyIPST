const countFilledValues = (obj: Record<string, unknown>): number => {
    return Object.values(obj).filter(value => 
        value !== null && value !== undefined && value !== ""
    ).length;
};


const data = {
    name: "Bob",
    age: 30,
    address: "123 Main St",
    phone: "1234567890",
    email: "",
    notes: null,
    job: undefined,
    salary: 50000,
};

console.log(countFilledValues(data));