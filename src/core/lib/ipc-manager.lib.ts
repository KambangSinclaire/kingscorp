import { BrowserWindow, ipcMain } from "electron";
import { Connection } from "typeorm";
import { UserManager } from "../controller/management/user/user.manager";
import { ProductManager } from "../controller/management/product/product.manager";
import { StockManager } from "../controller/management/stock/stock.manager";
import { PersonnelManager } from "../controller/management/personnel/personnel.manager";
import { CreditManager } from "../controller/management/credit/credit.manager";
import { InvoiceManager } from "../controller/management/invoice/invoice.manager";
import { NotificationManager } from "../controller/management/notification/notification.manager";
import { ServiceManager } from "../controller/management/service/service.manager";
import { InventoryManager } from "../controller/management/inventory/inventory.manager";
import { SalesManager } from "../controller/management/sale/sales.manager";
import { RoleManager } from "../controller/management/user/role.manager";
import { GroupManager } from "../controller/management/user/group.manager";
import { UserEntity } from "../database/models/entities/user.entity";
import { AppActionEvents } from "../events/app.events";
import { ProductEntity } from "../database/models/entities/product.entity";
import { StockEntity } from "../database/models/entities/stock.entity";
import { GroupEntity } from "../database/models/entities/group.entity";
import { RoleEntity } from "../database/models/entities/role.entity";
import { SalesEntity } from "../database/models/entities/sales.entity";
import { PermissionEntity } from "../database/models/entities/permissions.entity";
import { PersonnelEntity } from "../database/models/entities/personnel.entity";
import { InventoryEntity } from "../database/models/entities/inventory.entity";
import { InvoiceEntity } from "../database/models/entities/invoice.entity";
import { ServiceEntity } from "../database/models/entities/service.entity";
import { CreditEntity } from "../database/models/entities/credit.entity";
import { NotificationEntity } from "../database/models/entities/notification.entity";
import AbstractBaseManager from "../controller/management/AbstractBaseManager";
import { CategoryManager } from "../controller/management/category/category.manager";
import { CategoryEntity } from "../database/models/entities/categories.entity";


const ipcIncommingMessageHandler = (dbConnection: Connection, actionWindow: BrowserWindow) => {

    // CHANNEL HANDLER
    const channelHandler = (channel: string) => {
        ipcMain.handle(channel, async (event, payload) => {
            let res = await router(channel, payload, dbConnection, actionWindow);
            console.log("here is the response sent ", res);
            return res;
        })
    }

    channelHandler(AppActionEvents.user.login);
    channelHandler(AppActionEvents.product.add);
    channelHandler(AppActionEvents.product.retrieve);
    channelHandler(AppActionEvents.product.retrieveSingle);
    channelHandler(AppActionEvents.product.edit);
    channelHandler(AppActionEvents.product.delete);

    channelHandler(AppActionEvents.stock.add);
    channelHandler(AppActionEvents.stock.retrieve);
    channelHandler(AppActionEvents.stock.retrieveSingle);
    channelHandler(AppActionEvents.stock.edit);
    channelHandler(AppActionEvents.stock.delete);

    channelHandler(AppActionEvents.credit.add);
    channelHandler(AppActionEvents.credit.retrieve);
    channelHandler(AppActionEvents.credit.retrieveSingle);
    channelHandler(AppActionEvents.credit.edit);
    channelHandler(AppActionEvents.credit.delete);

    channelHandler(AppActionEvents.personnel.add);
    channelHandler(AppActionEvents.personnel.retrieve);
    channelHandler(AppActionEvents.personnel.retrieveSingle);
    channelHandler(AppActionEvents.personnel.edit);
    channelHandler(AppActionEvents.personnel.delete);

    channelHandler(AppActionEvents.inventory.add);
    channelHandler(AppActionEvents.inventory.retrieve);
    channelHandler(AppActionEvents.inventory.retrieveSingle);
    channelHandler(AppActionEvents.inventory.edit);
    channelHandler(AppActionEvents.inventory.delete);

    channelHandler(AppActionEvents.invoice.add);
    channelHandler(AppActionEvents.invoice.retrieve);
    channelHandler(AppActionEvents.invoice.retrieveSingle);
    channelHandler(AppActionEvents.invoice.edit);
    channelHandler(AppActionEvents.invoice.delete);

    channelHandler(AppActionEvents.role.add);
    channelHandler(AppActionEvents.role.retrieve);
    channelHandler(AppActionEvents.role.retrieveSingle);
    channelHandler(AppActionEvents.role.edit);
    channelHandler(AppActionEvents.role.delete);

    channelHandler(AppActionEvents.sale.add);
    channelHandler(AppActionEvents.sale.retrieve);
    channelHandler(AppActionEvents.sale.retrieveSingle);
    channelHandler(AppActionEvents.sale.edit);
    channelHandler(AppActionEvents.sale.delete);

    channelHandler(AppActionEvents.service.add);
    channelHandler(AppActionEvents.service.retrieve);
    channelHandler(AppActionEvents.service.retrieveSingle);
    channelHandler(AppActionEvents.service.edit);
    channelHandler(AppActionEvents.service.delete);

    channelHandler(AppActionEvents.group.add);
    channelHandler(AppActionEvents.group.retrieve);
    channelHandler(AppActionEvents.group.retrieveSingle);
    channelHandler(AppActionEvents.group.edit);
    channelHandler(AppActionEvents.group.delete);

    channelHandler(AppActionEvents.category.add);
    channelHandler(AppActionEvents.category.retrieve);
    channelHandler(AppActionEvents.category.retrieveSingle);
    channelHandler(AppActionEvents.category.edit);
    channelHandler(AppActionEvents.category.delete);

}


async function router(channel: string, payload: any, dbConnection: Connection, actionWindow: BrowserWindow) {

    console.log('here is the channel sent ', channel);

    /**
    * Handle User related events
    */
    if (channel.includes('User')) {
        const userManager = new UserManager() as any;
        AbstractBaseManager.entity = UserEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        AbstractBaseManager.actionEvent = AppActionEvents.user.login;
        userManager[channel](payload);
    }

    /**
     * Handle Product related events
     */
    if (channel.includes('Product')) {
        const productManager = new ProductManager() as any;
        AbstractBaseManager.entity = ProductEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        // const data = await productManager.getProductsByCategory({ relations: ['category'] })
        // console.log("here is the query result ", data);
        console.log("payload in the backend ", payload);

        return await productManager[channel](payload)
    }

    /**
    * Handle stock related events
    */
    if (channel.includes('Stock')) {
        const stockManager = new StockManager() as any;
        AbstractBaseManager.entity = StockEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await stockManager[channel](payload);
    }

    /**
    * Handle Credit related events
    */
    if (channel.includes('Credit')) {
        const creditManager = new CreditManager() as any;
        AbstractBaseManager.entity = CreditEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await creditManager[channel](payload);
    }

    /**
    * Handle personnel related events
    */
    if (channel.includes('Personnel')) {
        const personnelManager = new PersonnelManager() as any;
        AbstractBaseManager.entity = PersonnelEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await personnelManager[channel](payload);
    }

    /**
    * Handle Inventory related events
    */
    if (channel.includes('Invento')) {
        const inventoryManager = new InventoryManager() as any;
        AbstractBaseManager.entity = InventoryEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await inventoryManager[channel](payload);
    }

    /**
    * Handle Invoice related events
    */
    if (channel.includes('Invoice')) {
        const invoiceManager = new InvoiceManager() as any;
        AbstractBaseManager.entity = InvoiceEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await invoiceManager[channel](payload);
    }

    /**
    * Handle Role related events
    */
    if (channel.includes('Role')) {
        const roleManager = new RoleManager() as any;
        AbstractBaseManager.entity = RoleEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await roleManager[channel](payload)
    }

    /**
    * Handle Sale related events
    */
    if (channel.includes('Sale')) {
        const saleManager = new SalesManager() as any;
        AbstractBaseManager.entity = SalesEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await saleManager[channel](payload);
    }

    /**
    * Handle Service related events
    */
    if (channel.includes('Service')) {
        const serviceManager = new ServiceManager() as any;
        AbstractBaseManager.entity = ServiceEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await serviceManager[channel](payload);
    }

    /**
    * Handle Group related events
    */
    if (channel.includes('Group')) {
        const groupManager = new GroupManager() as any;
        AbstractBaseManager.entity = GroupEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await groupManager[channel](payload);
    }

    /**
    * Handle Category related events
    */
    if (channel.includes('Catego')) {
        const categoryManager = new CategoryManager() as any;
        AbstractBaseManager.entity = CategoryEntity;
        AbstractBaseManager.dbConnection = dbConnection;
        AbstractBaseManager.window = actionWindow;
        return await categoryManager[channel](payload);
    }

}

export default ipcIncommingMessageHandler;