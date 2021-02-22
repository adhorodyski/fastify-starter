import "dotenv/config";
import { Env, Config } from "config/models";

export const config: Config = {
    app: {
        name: "server",
        port: 8080,
        env: process.env.NODE_ENV || Env.DEVELOPMENT,
    },
};
