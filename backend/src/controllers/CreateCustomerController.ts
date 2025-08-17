import type { FastifyRequest, FastifyReply } from "fastify";
import CreateCustomerService from "../services/CreateCustomerService.js";
import { CustomerAlreadyExistsError, MissingDataError } from "../errors/CustomerErrors.js";

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email } = request.body as { name: string, email: string };

        const service: CreateCustomerService = new CreateCustomerService();

        try {
            const result = await service.execute({ name, email });
            reply.code(201).send(result);
        } catch (error) {
            if (error instanceof CustomerAlreadyExistsError) {
                reply.code(409).send({ error: error.message });
            } else if (error instanceof MissingDataError) {
                reply.code(400).send({ error: error.message });
            } else {
                reply.code(500).send({ error: "Internal Server Error" });
            }
        }
    }
}

export default CreateCustomerController;