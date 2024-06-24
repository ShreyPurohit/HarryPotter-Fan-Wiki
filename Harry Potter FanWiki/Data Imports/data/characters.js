const mongoose = require('mongoose')
const { Schema, model } = mongoose
const characterData = require('./characterData.json')

const CharacterModelSchema = new Schema({
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
        type: Schema.Types.String
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
    hairColour: {
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

const CharacterModel = model("characters", CharacterModelSchema)

async function insertData() {
    await mongoose.connect('mongodb://localhost:27017/fanwiki')
    await CharacterModel.insertMany(characterData)
    console.log("characters inserted")
    await mongoose.disconnect()
}

insertData()