import { PrismaClient } from "../generated/prisma/index.js";
import { CustomerAlreadyExistsError, MissingDataError } from "../errors/CustomerErrors.js";

const prisma = new PrismaClient();

interface CreateCustomerProps {
    name: string;
    email: string;
}

class CreateCustomerService {
    async execute({ name, email }: CreateCustomerProps) {

        const existingCustomer = await prisma.customer.findUnique({ where: { email } })
        if (existingCustomer) {
            throw new CustomerAlreadyExistsError();
        }
        if (!name || !email) {
            throw new MissingDataError();
        }
        try {
            return await prisma.customer.create({
                data: {
                    name,
                    email,
                    status: true
                }
            });
        } catch (error) {
            throw new Error("Error creating customer");
        }
    }
}

export default CreateCustomerService; 