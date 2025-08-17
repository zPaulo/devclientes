import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import CreateCustomerController from "./controllers/CreateCustomerController.js";
import ListCustomersController from "./controllers/ListCustomersController.js";
import DeleteCustomerController from "./controllers/DeleteCustomerController.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
        return { hello: 'world' }
    })

    fastify.post('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply)
    })

    fastify.delete('/customers/:customerId', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })

}