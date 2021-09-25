
import { Connection, Repository } from "typeorm";
import { UserEntity } from "../../../database/entities/user.entity";
import retrieveEntity from "../../../utils/retrieve-entity.util";
import { ResponsePayload } from "../../../interfaces/response.interface";

export class UserManager {

    static entity: UserEntity;
    static dbConnection: Connection;
    static repository: Repository<UserEntity | any>;

    async addUser(event: Event, userData: UserEntity): Promise<ResponsePayload> {
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
            console.log("Created user is ", newUser);
            return newUser;
        } catch (error: any) {
            return error.message
        }
    }
}