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


const ipcIncommingMessageHandler = (dbConnection: Connection, actionWindow: BrowserWindow) => {

    // CHANNEL HANDLER
    const channelHandler = (channel: string, handler: any) => {
        ipcMain.handle(channel, handler)
    }

    /**
     * Handle User related events
     */
    const userManager = new UserManager();
    AbstractBaseManager.entity = UserEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    AbstractBaseManager.actionEvent = AppActionEvents.user.login;
    channelHandler(AppActionEvents.user.login, userManager.addUser);


    /**
     * Handle Product related events
     */
    const productManager = new ProductManager();
    AbstractBaseManager.entity = ProductEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.product.add, productManager.addProduct);
    channelHandler(AppActionEvents.product.retrieve, productManager.getAllProducts);
    channelHandler(AppActionEvents.product.retrieveSingle, productManager.singleProduct);
    channelHandler(AppActionEvents.product.edit, productManager.editProduct);
    channelHandler(AppActionEvents.product.delete, productManager.deleteProduct);

    /**
    * Handle stock related events
    */
    const stockManager = new StockManager();
    AbstractBaseManager.entity = StockEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.stock.add, stockManager.addStock);
    channelHandler(AppActionEvents.stock.retrieve, stockManager.getAllStocks);
    channelHandler(AppActionEvents.stock.retrieveSingle, stockManager.singleStock);
    channelHandler(AppActionEvents.stock.edit, stockManager.editStock);
    channelHandler(AppActionEvents.stock.delete, stockManager.deleteStock);


    /**
    * Handle Credit related events
    */
    const creditManager = new CreditManager();
    AbstractBaseManager.entity = CreditEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.credit.add, creditManager.addCredit);
    channelHandler(AppActionEvents.credit.retrieve, creditManager.getAllCredits);
    channelHandler(AppActionEvents.credit.retrieveSingle, creditManager.singleCredit);
    channelHandler(AppActionEvents.credit.edit, creditManager.editCredit);
    channelHandler(AppActionEvents.credit.delete, creditManager.deleteCredit);

    /**
    * Handle personnel related events
    */
    const personnelManager = new PersonnelManager();
    AbstractBaseManager.entity = PersonnelEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.personnel.add, personnelManager.addPersonnel);
    channelHandler(AppActionEvents.personnel.retrieve, personnelManager.getAllPersonnels);
    channelHandler(AppActionEvents.personnel.retrieveSingle, personnelManager.singlePersonnel);
    channelHandler(AppActionEvents.personnel.edit, personnelManager.editPersonnel);
    channelHandler(AppActionEvents.personnel.delete, personnelManager.deletePersonnel);


    /**
    * Handle Inventory related events
    */
    const inventoryManager = new InventoryManager();
    AbstractBaseManager.entity = InventoryEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.inventory.add, inventoryManager.addInventory);
    channelHandler(AppActionEvents.inventory.retrieve, inventoryManager.getAllInventorys);
    channelHandler(AppActionEvents.inventory.retrieveSingle, inventoryManager.singleInventory);
    channelHandler(AppActionEvents.inventory.edit, inventoryManager.editInventory);
    channelHandler(AppActionEvents.inventory.delete, inventoryManager.deleteInventory);

    /**
    * Handle Invoice related events
    */
    const invoiceManager = new InvoiceManager();
    AbstractBaseManager.entity = InvoiceEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.invoice.add, invoiceManager.addInvoice);
    channelHandler(AppActionEvents.invoice.retrieve, invoiceManager.getAllInvoices);
    channelHandler(AppActionEvents.invoice.retrieveSingle, invoiceManager.singleInvoice);
    channelHandler(AppActionEvents.invoice.edit, invoiceManager.editInvoice);
    channelHandler(AppActionEvents.invoice.delete, invoiceManager.deleteInvoice);

    /**
    * Handle Role related events
    */
    const roleManager = new RoleManager();
    AbstractBaseManager.entity = RoleEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.role.add, roleManager.addRole);
    channelHandler(AppActionEvents.role.retrieve, roleManager.getAllRoles);
    channelHandler(AppActionEvents.role.retrieveSingle, roleManager.singleRole);
    channelHandler(AppActionEvents.role.edit, roleManager.editRole);
    channelHandler(AppActionEvents.role.delete, roleManager.deleteRole);

    /**
    * Handle Sale related events
    */
    const saleManager = new SalesManager();
    AbstractBaseManager.entity = SalesEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.sale.add, saleManager.addSales);
    channelHandler(AppActionEvents.sale.retrieve, saleManager.getAllSales);
    channelHandler(AppActionEvents.sale.retrieveSingle, saleManager.singleSale);
    channelHandler(AppActionEvents.sale.edit, saleManager.editSales);
    channelHandler(AppActionEvents.sale.delete, saleManager.deleteSales);

    /**
    * Handle Service related events
    */
    const serviceManager = new ServiceManager();
    AbstractBaseManager.entity = ServiceEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.service.add, serviceManager.addService);
    channelHandler(AppActionEvents.service.retrieve, serviceManager.getAllServices);
    channelHandler(AppActionEvents.service.retrieveSingle, serviceManager.singleService);
    channelHandler(AppActionEvents.service.edit, serviceManager.editService);
    channelHandler(AppActionEvents.service.delete, serviceManager.deleteService);

    /**
    * Handle Group related events
    */
    const groupManager = new GroupManager();
    AbstractBaseManager.entity = GroupEntity;
    AbstractBaseManager.dbConnection = dbConnection;
    AbstractBaseManager.window = actionWindow;
    channelHandler(AppActionEvents.group.add, groupManager.addGroup);
    channelHandler(AppActionEvents.group.retrieve, groupManager.getAllGroups);
    channelHandler(AppActionEvents.group.retrieveSingle, groupManager.singleGroup);
    channelHandler(AppActionEvents.group.edit, groupManager.editGroup);
    channelHandler(AppActionEvents.group.delete, groupManager.deleteGroup);


}







export default ipcIncommingMessageHandler;