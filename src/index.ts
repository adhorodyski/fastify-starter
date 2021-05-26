import { app } from "@src/app";
import { config } from "@src/config";

(async () => {
    try {
        await app.listen(config.port);
        console.log(`🚀 Fastify :: port ${config.port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
