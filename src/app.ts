import fastify from "fastify";
import helmet from "fastify-helmet";
import cors from "fastify-cors";
import { router } from "@src/router";

export const app = fastify({
    /*
        Production-only logger
    */
    logger: process.env.NODE_ENV === "production",
});

app.register(helmet);
app.register(cors);
app.register(router);
