import fastify from "fastify";
import { router } from "@src/router";
import "dotenv/config";

export const config = {
    port: process.env.PORT || 3030,
    address: process.env.ADDRESS || "0.0.0.0",
    env: process.env.NODE_ENV || "development",
};

export const app = fastify({
    logger: process.env.NODE_ENV === "production",
});

app.register(router).after(() => console.log(app.printRoutes()));
