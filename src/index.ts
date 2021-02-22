import { app } from "./app";
import { config } from "config";

(async () => {
    try {
        await app.listen(config.app.port);
        console.log(`🚀 Fastify :: port ${config.app.port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
