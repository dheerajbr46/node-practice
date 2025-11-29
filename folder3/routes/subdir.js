const express = require('express');
const router = express.Router();
const path = require('path');

router.get(new RegExp('^/$|/index(.html)?'), (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'));
});

router.get(new RegExp('^/test(.html)?'), (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'));
});

module.exports = router;