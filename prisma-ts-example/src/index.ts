import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const newProduct = await prisma.product.create({
        data: {
            name: "Producto 1",
            price: "100.22",
            stock: true
        }
    });
    console.log(newProduct);
}

main();