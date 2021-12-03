/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { createConnection } from "typeorm";
import { CreditEntity } from "../database/models/entities/credit.entity";
import { GroupEntity } from "../database/models/entities/group.entity";
import { InventoryEntity } from "../database/models/entities/inventory.entity";
import { InvoiceEntity } from "../database/models/entities/invoice.entity";
import { NotificationEntity } from "../database/models/entities/notification.entity";
import { PermissionEntity } from "../database/models/entities/permissions.entity";
import { PersonnelEntity } from "../database/models/entities/personnel.entity";
import { ProductEntity } from "../database/models/entities/product.entity";
import { RoleEntity } from "../database/models/entities/role.entity";
import { SalesEntity } from "../database/models/entities/sales.entity";
import { ServiceEntity } from "../database/models/entities/service.entity";
import { StockEntity } from "../database/models/entities/stock.entity";
import { UserEntity } from "../database/models/entities/user.entity";
import { CategoryEntity } from "../database/models/entities/categories.entity";
import { ClientEntity } from "../database/models/entities/client.entity";

require('dotenv').config();
const config = {
    database: async () => {
        return await createConnection({
            type: "sqlite",
            database: "kingscorp.db",
            synchronize: true,
            entities: [
                UserEntity,
                ProductEntity,
                GroupEntity,
                SalesEntity,
                PersonnelEntity,
                InvoiceEntity,
                InventoryEntity,
                RoleEntity,
                PermissionEntity,
                ServiceEntity,
                NotificationEntity,
                StockEntity,
                CreditEntity,
                CategoryEntity,
                ClientEntity
            ]
        });
    },
    apiKey: process.env.APP_KEY,
    apiSecret: process.env.APP_SECRET
}
export default config;