const pool = require('../database/conection')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authUser = async (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization) {
        return res.status(401).json({ message: "Not authorized"})
    }

    const token = authorization.split(' ')[1]
    
    try {
        const { id }= await jwt.verify(token, process.env.JWT_PVK)

        const { rows, rowCount } = await pool.query('SELECT * FROM users WHERE id = $1', [id])

        if(rowCount < 1) {
            return res.status(401).json({ message: "Not authorized" })
        }

        req.user = rows[0]
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal error" })
    }
}

module.exports = authUser