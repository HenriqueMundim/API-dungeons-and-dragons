const fs = require('fs/promises')

const updateChar = async (req, res) => {
    const {
        id,
        charName,
        profession,
        level
    } = req.body

    const db = JSON.parse(await fs.readFile('./src/database/database.json'))
    const character = db.find((currentvalue) => currentvalue.id === id)
    const invalidCharacter = db.find(currentValue => currentValue.charName === charName)
    const validProfession = validProfessions.find(currentValue => currentValue === profession)

    if(!id) {
        return res.status(400).json({ message: "ID is required"})
    }
    if(!charName) {
        return res.status(400).json({ message: "Character name is required"})
    }
    if(!profession || !validProfession) {
        return res.status(400).json({ message: "Profession is invalid or required"})
    }
    if(!character) {
        return res.status(404).json({ message: "Character not found" })
    }
    if(!level) {
        return res.status(400).json({ message: "Character level is required"})
    }
    if(invalidCharacter) {
        return res.status(400).json({ message: "A character with this name already exists" })
    }

    character = {
        id,
        charName,
        profession,
        level: isNaN(level) ? character.level : Number(level) 
    } 
    
    await fs.writeFile('./src/database/database.json', JSON.stringify(db))
    return res.status(204).json()
}

module.exports = updateChar;

