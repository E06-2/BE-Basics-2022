const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const profile = require('../controller/profileController');

router.post('/save', auth.validate, profile.save);

module.exports = router;