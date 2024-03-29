const express = require('express');
const router = express();
const listCharacters = require('./controllers/character/listChars');
const createCharacter = require('./controllers/character/createChar');
const updateChar = require('./controllers/character/updateChar');
const registerUser = require('./controllers/user/registerUser');
const authUser = require('./middlewares/auth');
const login = require('./controllers/user/login');
const deleteChar = require('./controllers/character/deleteChar');

router.post('/user', registerUser)
router.post('/login', login)

router.use(authUser)

router.get('/character', listCharacters);
router.post('/character', createCharacter);
router.put('/character/:id', updateChar)
router.delete('/character', deleteChar)

module.exports = router;