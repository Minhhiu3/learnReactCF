import fs from "fs";
import { faker } from "@faker-js/faker";
import { title } from "process";

const products = Array.from({ length: 50 }, () => ({
    id: faker.string.uuid(),
    title: faker.person.jobTitle().substring(0, 10),
    description: faker.commerce.productName().substring(0, 10),
    level: faker.helpers.arrayElement(["low", "medium", "high"]),
    status: faker.helpers.arrayElement(["false", "true"]),
}));
fs.writeFileSync('db.json', JSON.stringify({ products }, null, 2));