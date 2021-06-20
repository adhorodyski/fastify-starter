import { FastifyInstance } from "fastify";
import { pingController } from "@ping/controller";

export const router = async (fastify: FastifyInstance) => {
    await fastify.register(pingController, { prefix: "ping" });
};
