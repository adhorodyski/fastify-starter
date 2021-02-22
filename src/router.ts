import { FastifyInstance } from "fastify";
import { pingController } from "ping/controller";

export const router = async (fastify: FastifyInstance) => {
    fastify.register(pingController, { prefix: "v1/ping" });
};
