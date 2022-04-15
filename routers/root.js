const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.end('Root route');
})

router.get('/about', (req, res) => {
    res.end('about route');
})

router.get('/info', (req, res) => {
    res.end('info route');
})

module.exports = router;