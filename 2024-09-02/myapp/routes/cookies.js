const express = require('express');
const router = express.Router();

router.get('/set', (req, res) => {
    res.cookie('token', 'xyz', { maxAge: 5000, httOnly: true });
    res.send('Cookies has been set');
});

router.get('/get', (req, res) => {
    const token = req.cookies.token;
    res.send(`Cookie value: ${token}`);
});

module.exports = router;