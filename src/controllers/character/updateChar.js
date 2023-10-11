const pool = require('../../database/conection')

const updateChar = async (req, res) => {
    const {
        character_name,
        class_id,
        level
    } = req.body

    const params = req.params

    const { id } = req.user

    if(!character_name) {
        return res.status(400).json({ message: "Character name is required"})
    }
    if(!class_id) {
        return res.status(400).json({ message: "Profession is invalid or required"})
    }
    if(!level) {
        return res.status(400).json({ message: "Character level is required"})
    }

    try {
        const { rowCount } = await pool.query('SELECT * FROM characters WHERE character_name = $1', [character_name])
        if(rowCount > 0) {
            return res.status(400).json({ message: "Character already exists" })
        }
        const character = await pool.query(`SELECT * FROM characters WHERE id = $1`, [params.id])
        if(character.rows[0].user_id != id) {
            return res.status(404).json({ message: "Character not found" })
        }

        const queryUpdateChar = `
        UPDATE characters
        SET
        character_name = $1, 
        class_id = $2, 
        character_level = $3
        WHERE id = $4
        `
        const updatedChar = await pool.query(queryUpdateChar, [character_name, class_id, level, id])
        return res.status(204).json()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal error" })
    }
}

module.exports = updateChar;

