const express = require('express');
const router = express();
const listCharacters = require('./controllers/character/listChars');
const createCharacter = require('./controllers/character/createChar');

router.get('/character', listCharacters);
router.post('/character', createCharacter);

module.exports = router;