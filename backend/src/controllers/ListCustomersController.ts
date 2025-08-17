import type { FastifyRequest, FastifyReply } from "fastify";
import ListCustomersService from "../services/ListCustomersService.js";

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const service: ListCustomersService = new ListCustomersService();
        try {
            const result = await service.execute();
            reply.code(200).send(result);
        } catch (error) {
            reply.code(500).send({ error: "Internal Server Error" });
        }
    }
}

export default ListCustomersController;