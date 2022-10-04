const router = require('express').Router();
const path = require('path');
const {test, 
    createCharacter, 
    getCharacter, 
    deleteCharacter, 
    updateCharacter} = require('./../controllers/character-control');

// CREATE
router.route('/character/create').post(createCharacter);

// READ
router.route('/character').get(getCharacter);

// DELETE
router.route('/character/delete/:id').delete(deleteCharacter);

// UPDATE
router.route('/character/update/:id').put(updateCharacter);

// TEST
router.route('/').get(test);

module.exports = router;