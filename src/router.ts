import { FastifyInstance } from "fastify";
import { exampleController } from "example/controller";

export const router = async (fastify: FastifyInstance) => {
    fastify.register(exampleController, { prefix: "v1/example" });
};
