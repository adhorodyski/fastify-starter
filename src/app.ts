import fastify from "fastify";
import helmet from "fastify-helmet";
import cors from "fastify-cors";
import { router } from "./router";
import { Env } from "config/models";

export const app = fastify({
    /*
        Production-only logger
    */
    logger: process.env.NODE_ENV === Env.PRODUCTION,
});

app.register(helmet);
app.register(cors);
app.register(router);
