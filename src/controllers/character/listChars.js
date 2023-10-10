const pool = require('../../database/conection')

const listCharacters = async (req, res) => {
    const { id } = req.user
    try {
        const querycharacters = `SELECT * FROM characters WHERE user_id = $1`
        const characters = await pool.query(querycharacters, [id])
        return res.status(200).json(characters.rows)
    } catch(error) {
        return res.status(500).json({ message: "Internal error."})
    }
}

module.exports = listCharacters