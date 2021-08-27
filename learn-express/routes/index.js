const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.locals.title = 'Express';
    res.render();
});

module.exports = router;