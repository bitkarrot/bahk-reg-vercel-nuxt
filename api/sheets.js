const express = require("express");
const router = express.Router();

const axios = require('axios')
const formidable = require('formidable')

/**
 * POST entries from Form
 *
 * @return btcpay link | empty.
 */
router.post("/api/sheets", async(req, res) => {
    const dotenv = require('dotenv')
    dotenv.config({ path: './.env' })

    const { google } = require('googleapis')
    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
    const sheetID = '1IMG9vZhrJHh9be5KVkXfXHuuIYqafbX2r6sdYlFHWUE'
    const sheet1 = 'Individuals'
    const keyfile = 'credentials.json'


    try {

        ////////// setup constants & btcpay url //////////
        const base_url = process.env.VUE_APP_BASE_URL
        const apikey = process.env.VUE_APP_APIKEY
        const storeId = process.env.VUE_APP_STORE_ID

        console.log('base url: ', base_url)
        console.log('api key:', apikey)
        console.log('store id: ', storeId)

        const headers = {
            Authorization: 'token ' + apikey,
            'Content-Type': 'application/json'
        }
        console.log("headers", headers)

        const btcpayurl = base_url + '/api/v1/stores/' + storeId + '/payment-requests'
        console.log("posting url:", btcpayurl)
            ////////// setup constants & btcpay url //////////

        const auth = new google.auth.GoogleAuth({
            keyFile: keyfile,
            scopes: SCOPES,
        });


        // const client = await auth.getClient();
        // const googleSheets = google.sheets({ version: 'v4' })

        // TODO fill in method for getting form data

        const btcpaylink = ""
        res.send(btcpaylink);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;