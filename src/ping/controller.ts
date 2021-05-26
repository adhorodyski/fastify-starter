import { FastifyInstance, FastifyRequest } from "fastify";
import { PingService } from "@ping/service";

export const pingController = async (fastify: FastifyInstance) => {
    const pingService = new PingService();

    fastify.get("/", async (req: FastifyRequest<any>): Promise<string> => {
        return pingService.pong();
    });
};
