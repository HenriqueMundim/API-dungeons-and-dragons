const fs = require('fs/promises');
const validProfessions = require('../../utils/validProfessions')
const crypto = require('crypto');

const createCharacter = async (req, res) => {
    const {
        playerName,
        charName,
        profession,
        level
    } = req.body;

    try {
        const dbParse = JSON.parse(
            await fs.readFile('./src/database/database.json')
        )

        const charExists = dbParse.find(currentValue => currentValue.charName === charName);

        if (charExists) {
            return res.status(400).json({ message: "Character with that name already exists" });
        }

        if (!playerName) {
            return res.status(400).json({ message: "playerName is required." });
        }

        if (!charName) {
            return res.status(400).json({ message: "charName is required." });
        }

        const validProfession = validProfessions.find(currentValue => currentValue === profession.toUpperCase());

        if (!profession || !validProfession) {
            return res.status(400).json({ message: "Profession is invalid or required." });
        }

        const newCharacter = {
            id: crypto.randomUUID(),
            playerName,
            charName,
            profession: profession.toUpperCase(),
            level: isNaN(level) ? 1 : Number(level)
        }

        dbParse.push(newCharacter);
        await fs.writeFile('./src/database/database.json', JSON.stringify(dbParse));

        return res.status(201).json();
    } catch (erro) {
        return res.status(500).json({ message: "Internal error." })
    }
}

module.exports = createCharacter;
