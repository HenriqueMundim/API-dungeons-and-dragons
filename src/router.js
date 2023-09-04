const express = require('express');
const router = express();
const listCharacters = require('./controllers/character/listChars');
const createCharacter = require('./controllers/character/createChar');
const updateChar = require('./controllers/character/updateChar');

router.get('/character', listCharacters);
router.post('/character', createCharacter);
router.put('/character', updateChar)

module.exports = router;