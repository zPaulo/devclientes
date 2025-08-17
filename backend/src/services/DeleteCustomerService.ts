import { CustomerNotFoundError } from "../errors/CustomerErrors.js";
import { PrismaClient } from "../generated/prisma/index.js";


const prisma = new PrismaClient();

interface DeleteCustomerProps {
    customerId: string;
}

class DeleteCustomerService {
    async execute({ customerId }: DeleteCustomerProps): Promise<void> {

        const customer = await prisma.customer.findFirst({
            where: { id: customerId }
        })

        if (!customer) {
            throw new CustomerNotFoundError();
        }

        await prisma.customer.delete({
            where: { id: customerId }
        })

    }
}

export default DeleteCustomerService;