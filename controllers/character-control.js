const {Character} = require('./../models');

async function createCharacter ({body}, res )
{
    const newCharacter = await Character.create(body);
    if (!newCharacter)
    {
        return res.status(400).json({message: 'user not created'});
    }
    return res.json(newCharacter);
}

async function getCharacter({body}, res)
{
    const characters = await Character.find();
    res.json(characters);
}

async function test({body}, res)
{
    return res.json("ok");
}

async function deleteCharacter({body, params }, res)
{
    Character.findByIdAndDelete(params.id, (deletedCharacter) => {
        if (!deleteCharacter)
        {
            return res.json("No such id existed");
        }
        res.json("This character has been deleted");
    })
}

async function updateCharacter({body, params}, res)
{
    Character.findByIdAndUpdate(params.id, body, {new: true},
        (error, updatedCharacter) => {
            if (!updatedCharacter)
            {
                return res.json("Something went wrong when updating");
            }
            res.json(updatedCharacter);
        }
    )
}
module.exports = 
{
    test,
    createCharacter,
    getCharacter,
    deleteCharacter,
    updateCharacter
}