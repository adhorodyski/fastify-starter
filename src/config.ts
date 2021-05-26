import "dotenv/config";

export const config = {
    port: process.env.PORT || 3030,
    env: process.env.NODE_ENV || "development",
};
