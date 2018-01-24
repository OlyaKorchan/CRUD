const express = require('express');
const fs = require('fs');
const router = express.Router();

const renderHomePage = require('../modules/renderHomePage');
const userData = require('../modules/CRUDuser');

router.get('/', renderHomePage);
router.get('/users', userData.renderUsersData); 
router.post('/users', userData.addUser);
router.post('/users/edit', userData.editUser);
router.post('/users/delete/:id', userData.removeUser);

module.exports = router;