const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    res.send("Olá Anthony, tudo bem?")
})

module.exports = router