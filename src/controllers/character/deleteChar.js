const pool = require('../../database/conection')

const deleteChar = async (req, res) => {
    const { character_name } = req.body
    const { id } = req.user
    
    try {
        const { rowCount, rows } = await pool.query('SELECT * FROM characters WHERE character_name = $1', [character_name])
        if(rowCount < 1) {
            return res.status(404).json({ message: "Character not found"})
        }
        if(rows[0].user_id != id) {
            return res.status(404).json({ message: "Character not found"})
        }

        const deletedCharacter = await pool.query('DELETE FROM characters WHERE character_name = $1', [character_name])
        return res.status(204).json()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal error" })
    }
}


module.exports = deleteChar