const fs = require('fs/promises')

const listCharacters = async (req, res) => {
    try {
        const charParse = JSON.parse(await fs.readFile('./src/database/database.json'));
        return res.status(200).json(charParse)
    } catch {
        return res.status(500).json({ message: "Internal error."})
    }
}

module.exports = listCharacters