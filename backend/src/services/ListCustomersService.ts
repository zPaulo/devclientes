import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();


class ListCustomersService {
    async execute() {

        const customers = await prisma.customer.findMany();

        return customers;

    }
}

export default ListCustomersService;