const express = require('express');
const requestIp = require('request-ip');

const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        ipaddress: requestIp.getClientIp(req),
        language: req.headers["accept-language"],
        software: req.headers['user-agent']
    });
});

module.exports = router;