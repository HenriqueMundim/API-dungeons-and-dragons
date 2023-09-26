const pool = require('../../database/conection')

const createCharacter = async (req, res) => {
   

    try {
       const teste = await pool.query('SELECT * FROM classes')

        return res.status(200).json(teste.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal error." })
    }
}

module.exports = createCharacter;
