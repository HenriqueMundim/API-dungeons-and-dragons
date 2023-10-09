const pool = require('../../database/conection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {
    const { email, password } = req.body

    if(!email || !password) {
        return res.status(400).json({ message: "Email or password is required" })
    }

    try {
        const queryUserExists = `SELECT * FROM users u WHERE u.email = $1` 
        const { rowCount, rows } = await pool.query(queryUserExists, [email])

        if(rowCount < 1) {
            return res.status(404).json({ message: "User not found"})
        }

        const correctPassword = await bcrypt.compare(password, rows[0].password)

        if(!correctPassword) {
            return res.status(400).json({ message: "Email or password are incorrect" })
        }

        const token = await jwt.sign({ id: rows[0].id}, process.env.JWT_PVK)

        const { senha:_, ...user} = rows[0]
        return res.status(200).json({ user, token})
        
    } catch (error) {
        return res.status(500).json({ message: "Internal Error" })
    }

}

module.exports = login
