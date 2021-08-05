const express = require("express");
const router = express.Router();


/**
 * GET entries from spreadsheet
 *
 * @return product list | empty.
 */
router.get("/api/entries", async(req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get data has responded successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;