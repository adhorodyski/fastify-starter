import { app, config } from "@src/app";

(async () => {
    try {
        await app.listen(config.port, config.address);
        console.log(`🚀 Fastify :: port ${config.port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
