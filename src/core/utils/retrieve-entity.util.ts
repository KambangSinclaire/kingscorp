import { Connection } from "typeorm";

const retrieveEntity = (entity: any,dbConnection:Connection) => {
    return dbConnection.getRepository(entity);
}
export default retrieveEntity;