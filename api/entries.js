const express = require("express");
const router = express.Router();
const fs = require('fs');
import { google, SCOPES, sheetID, keyfile } from './constants.js';

/**
 * GET entries from spreadsheet
 *
 * @return product list | empty.
 */
router.get("/api/entries", async(req, res) => {
    const sheet1 = 'Individuals'

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: keyfile,
            scopes: SCOPES,
        });
        // create client instance for auth
        const client = await auth.getClient();

        // instance of google sheets API
        const googleSheets = google.sheets({ version: 'v4' })

        // Read rows from spreadsheet
        const getRows = await googleSheets.spreadsheets.values.get({
            auth: auth,
            spreadsheetId: sheetID,
            range: sheet1,
        });

        res.send(getRows.data);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;