const pool = require('../../database/conection')

const createCharacter = async (req, res) => {
    const { character_name, class_id, character_level} = req.body
    const { id } = req.user

    try {
        const { rowCount } = await pool.query('SELECT * FROM characters WHERE character_name = $1', [character_name])
        if(rowCount > 0) {
            return res.status(400).json({ message: "Character already exists"})
        }
        const queryNewCharacter = `
        INSERT INTO characters
        (character_name, class_id, character_level, user_id)
        VALUES
        ($1, $2, $3, $4) RETURNNING *`
        const newCharacter = await pool.query(queryNewCharacter, [character_name, class_id, character_level, id])
        return res.status(201).json(newCharacter.rows[0])
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal error" })
    }
}

module.exports = createCharacter;
