import { app } from "./app";
import { config } from "config";

(async () => {
    await app.listen(config.app.port);

    console.log(`🚀 Fastify :: port ${config.app.port}`);
})();
