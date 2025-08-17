import type { FastifyRequest, FastifyReply } from "fastify";
import { CustomerNotFoundError, MissingDataIdError } from "../errors/CustomerErrors.js";
import DeleteCustomerService from "../services/DeleteCustomerService.js";
import { ObjectId } from "mongodb";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { customerId } = request.params as { customerId: string };

        if (!customerId || !ObjectId.isValid(customerId)) {
            reply.code(400).send({ error: "customerId param is invalid" });
            return;
        }

        const service: DeleteCustomerService = new DeleteCustomerService();

        try {
            await service.execute({ customerId });
            reply.code(204).send();
        } catch (error) {
            if (error instanceof CustomerNotFoundError) {
                reply.code(404).send({ error: error.message });
            } else if (error instanceof MissingDataIdError) {
                reply.code(400).send({ error: error.message });
            } else {
                reply.code(500).send({ error: "Internal Server Error" });
            }
        }
    }
}

export default DeleteCustomerController;