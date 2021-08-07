const express = require("express");
const router = express.Router();

router.post("/api/posttest", async(req, res) => {
    try {
        res.json({ message: 'https://btcpay.bitcoin.org.hk' })

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;