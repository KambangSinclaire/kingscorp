import { createConnection } from "typeorm";
import { UserEntity } from "../database/entities/user.entity";

require('dotenv').config();
const config = {
    database: async () => {
        return await createConnection({
            type: "sqlite",
            database: "kingscorp.db",
            synchronize:true,
            entities:[UserEntity]
        });
    },
    apiKey: process.env.APP_KEY,
    apiSecret: process.env.APP_SECRET
}
export default config;