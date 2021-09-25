/**
 * Author : @Sinclaire 2021
 */

import { Connection, Repository } from "typeorm";
import { UserEntity } from "../../../database/entities/user.entity";
import retrieveEntity from "../../../utils/retrieve-entity.util";
import { ResponseStatus } from "../../../constants/response-status.constants";
import { responseHandler } from "../../../middlewares/response.handler";
import { BrowserWindow } from "electron";
import AbstractBaseManager from "../AbstractBaseManager";

export class UserManager extends AbstractBaseManager {

    async addUser(event: Event, userData: UserEntity) {
        let user = UserManager.entity;
        UserManager.repository = retrieveEntity(UserEntity, UserManager.dbConnection);
        user = {
            signInType: "email",
            password: "pass",
            username: "Sinclaire",
            lastLogin: new Date(),
            lastLoginIp: "192.168.100.1",
            lastLoginLocation: "Buea",
            lastName: "Sume",
            firstName: "Kambang",
            about: "Engineer and cyber manager",
            gender: "Male",
            role: "admin,subadmin",
            status: true,
            createdBy: "admin"
        };

        try {
            const newUser = await UserManager.repository.save(user);

            console.log("Created new user", newUser);

            responseHandler({
                status: ResponseStatus.OK,
                message: "New user added",
                payload: {data:newUser},
                platform: {
                    window: UserManager.window,
                    actionEvent: UserManager.actionEvent
                }
            });

        } catch (error: any) {

            responseHandler({
                status: ResponseStatus.BAD_REQUEST,
                message: error.message,
                platform: {
                    window: UserManager.window,
                    actionEvent: UserManager.actionEvent
                }
            });

        }
    }
}