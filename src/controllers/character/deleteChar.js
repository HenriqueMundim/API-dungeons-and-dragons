const fs = require('fs/promises')

const deleteChar = async (req, res) => {
    const {
        id,
        charName
    } = req.body

    const db = JSON.parse(await fs.readFile('./src/database/database.json'))
}


module.exports = deleteChar