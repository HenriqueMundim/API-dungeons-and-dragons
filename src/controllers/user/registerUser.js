const pool = require('../../database/conection')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
    const {player_name , email, password} = req.body
    if(!email || !password || !player_name) {
        return res.status(400).json({ message: "Email or password or player name is required" })
    }

    try {
        const queryUserExists = `SELECT * FROM users us WHERE us.email = $1 OR us.player_name = $2`
        const userExists = await pool.query(queryUserExists, [email, player_name])

        if(userExists.rowCount > 0) {
            return res.status(400).json({ message: "User already exists" })
        }

        const encryptedPassword = await bcrypt.hash(password, 10)

        const queryRegisterUser = `
        INSERT INTO users(player_name, email, password)
        VALUES
        ($1, $2, $3) RETURNING id, player_name, email, number_characters`

        const { rows } = await pool.query(queryRegisterUser, [player_name, email, encryptedPassword])

        return res.status(201).json(rows[0])
        

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal error" })
    }
}

module.exports = registerUser