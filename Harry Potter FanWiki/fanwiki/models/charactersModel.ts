import mongoose, { Schema, model } from "mongoose";

export interface ICharacters {
    _id: string
    name: string,
    alternate_names: string[],
    species: string,
    gender: string,
    house: string,
    dateOfBirth: Date,
    yearOfBirth: number,
    wizard: boolean,
    ancestry: string,
    eyeColour: string,
    hairColor: string,
    wand: {
        wood: string,
        core: string,
        length: number | null
    },
    patronus: string,
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor: string,
    alive: boolean,
    image: string
}

const CharacterModelSchema = new Schema<ICharacters>({
    name: {
        type: Schema.Types.String
    },
    alternate_names: {
        type: [Schema.Types.String]
    },
    species: {
        type: Schema.Types.String
    },
    gender: {
        type: Schema.Types.String
    },
    house: {
        type: Schema.Types.String
    },
    dateOfBirth: {
        type: Schema.Types.Date
    },
    yearOfBirth: {
        type: Schema.Types.Number
    },
    wizard: {
        type: Schema.Types.Boolean
    },
    ancestry: {
        type: Schema.Types.String
    },
    eyeColour: {
        type: Schema.Types.String
    },
    hairColor: {
        type: Schema.Types.String
    },
    wand: {
        wood: Schema.Types.String,
        core: Schema.Types.String,
        length: Schema.Types.Number,
    },
    patronus: {
        type: Schema.Types.String
    },
    hogwartsStudent: {
        type: Schema.Types.Boolean
    },
    hogwartsStaff: {
        type: Schema.Types.Boolean
    },
    actor: {
        type: Schema.Types.String
    },
    alive: {
        type: Schema.Types.Boolean 
    },
    image: {
        type: Schema.Types.String
    },
}, { timestamps: true })

const CharacterModel = mongoose.models.Characters || model("Characters", CharacterModelSchema)
export default CharacterModel