type UserWithGadget = {
  id: string;
  name: string;
  gadget: {
    id: string;
    name: string;
    price: string | undefined;
  };
};

type UserWithGadgets = {
  id: string;
  name: string;
  gadgets: {
    id: string;
    name: string;
    price: string | undefined;
  }[];
};
function aggregateUsers(users: UserWithGadget[]): UserWithGadgets[] {
  const usersMap: Record<string, UserWithGadgets> = {};

  // цикл для прохождения по каждому, КАЖДОМУ пользователю
  for (const user of users) {
    if (usersMap[user.id]) {
      usersMap[user.id].gadgets.push(user.gadget);
    } else {
      usersMap[user.id] = {
        id: user.id,
        name: user.name,
        gadgets: [user.gadget],
      };
    }
  }

  return Object.values(usersMap);
}

// Пример данных для входа
const input: UserWithGadget[] = [
  {
    id: "1",
    name: "Khalid Kashmiri",
    gadget: { id: "101", name: "Phone", price: "1000" },
  },
  {
    id: "2",
    name: "Khidir Karawita",
    gadget: { id: "102", name: "Tablet", price: undefined },
  },
  {
    id: "1",
    name: "Khalid Kashmiri",
    gadget: { id: "103", name: "Laptop", price: "1500" },
  },
];

// Пример данных для выхода
const output: UserWithGadgets[] = aggregateUsers(input);
console.log(output);