import { Schema, model, models } from "mongoose";

interface ISpells {
    name: string,
    description: string
}

const SpellModelSchema = new Schema<ISpells>({
    name: Schema.Types.String,
    description: Schema.Types.String
})

const SpellModel = models.Spells || model("Spells", SpellModelSchema)

export default SpellModel