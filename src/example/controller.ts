import { FastifyInstance, FastifyRequest } from "fastify";
import { ExampleService } from "example/service";

export const exampleController = async (fastify: FastifyInstance) => {
    const exampleService = new ExampleService();

    fastify.get(
        "/",
        async (req: FastifyRequest<any>): Promise<string> => {
            return exampleService.getExample();
        },
    );
};
