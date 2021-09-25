import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config/app.config";

export class Tokenizer {

    signToken(data: { role: string | any, _id: string | any }) {
        let secret = config.apiKey;
        return jwt.sign(
            {
                role: data.role,
                user_id: data._id
            },
            secret,
            {
                expiresIn: '5mins'
            });
    }

    verifyToken(token: string) {
        let decodedData = {};
        let secret = config.apiKey;
        try {
            decodedData = jwt.verify(token, secret);
            return decodedData;
        } catch (error) {
            return error;
        }
    }

    signIdentity(data: { location: string | any, resource: string | any }) {
        let secret = config.apiKey;
        return jwt.sign(
            {
                role: data.location,
                resource: data.resource
            },
            secret,
            {
                expiresIn: 'never'
            });
    }

    verifyIdentity(token: string) {
        let decodedData = {};
        let secret = config.apiKey;
        try {
            decodedData = jwt.verify(token, secret);
            return decodedData;
        } catch (error) {
            return error;
        }
    }


    async hashString(value: string|any) {
        let salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(value, salt);
    }

    async compareHashedString(value: string|any, hashedValue: string|any) {
        return await bcrypt.compare(value, hashedValue);
    }
}