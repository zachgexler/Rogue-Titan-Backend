
const { Schema, model } = require('mongoose');


const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        skills: { 
            type: Array,
            required: true,
        }
    }
)
const Character = model('Character', characterSchema);

module.exports = Character;