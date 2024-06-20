import { Schema, Types, model, models } from "mongoose";

export enum EUser {
    admin = 'admin',
    user = 'user',
}

export interface IUser {
    username: string,
    email: string,
    password: string,
    role: EUser,
    favs: Types.ObjectId[]
}

const UserModelSchema = new Schema<IUser>({
    username: {
        type: Schema.Types.String,
        required: [true, "User Name Is Required"],
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: [true, "Password Is Required"]
    },
    email: {
        type: Schema.Types.String,
        required: [true, "Email Is Required"],
        unique: true
    },
    role: {
        type: Schema.Types.String,
        enum: {
            values: [EUser.admin, EUser.user],
            message: '({VALUE}) is not supported',
        },
        default: EUser.user
    },
    favs: [{
        type: Schema.Types.ObjectId,
        ref: "Characters"
    }]
}, { timestamps: true })

const UserModel = models.Users || model("Users", UserModelSchema)

export default UserModel