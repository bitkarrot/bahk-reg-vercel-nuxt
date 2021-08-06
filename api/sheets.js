import { getbtcpayload } from './payload.js';

const express = require("express");
const app = express()
const axios = require('axios')
const formidable = require('formidable')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

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


/**
 * POST entries from Form
 *
 * @return btcpay link | empty.
 */
app.post("/api/sheets", async(req, res) => {
    try {
        const { google } = require('googleapis')
        const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
        const sheetID = '1IMG9vZhrJHh9be5KVkXfXHuuIYqafbX2r6sdYlFHWUE'
        const keyfile = 'credentials.json'
        const auth = new google.auth.GoogleAuth({
            keyFile: keyfile,
            scopes: SCOPES
        })
        const client = auth.getClient()

        const form = new formidable.IncomingForm({ multiples: true });
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Error', err)
                throw err
            }
            const currentTime = new Date().toUTCString()
            const googleSheets = google.sheets({ version: 'v4', auth: client })
            if (fields.type === 'individual') {
                const result = googleSheets.spreadsheets.values.append({
                    auth: auth,
                    spreadsheetId: sheetID,
                    range: "Individuals!A:I",
                    valueInputOption: "USER_ENTERED",
                    resource: {
                        values: [
                            [
                                currentTime,
                                fields.name,
                                fields.chinese,
                                fields.email,
                                fields.physical,
                                fields.publish,
                                fields.telegram,
                                fields.keybase,
                                '',
                            ],
                        ],
                    },
                });
                console.log('google sheets result', result);
            } else if (fields.type === 'organization') {
                const result = googleSheets.spreadsheets.values.append({
                    auth: auth,
                    spreadsheetId: sheetID,
                    range: "Organizations!A:H",
                    valueInputOption: "USER_ENTERED",
                    resource: {
                        values: [
                            [
                                currentTime,
                                fields.orgname,
                                fields.chinese,
                                fields.name,
                                fields.email,
                                fields.publish,
                                fields.url,
                                '',
                            ],
                        ],
                    },
                });
                console.log('google sheets result', result);
            }

            const payload = getbtcpayload(fields)
            console.log('payload', payload)
                // Error: socket hang up
                /*
                const ares = axios.post(btcpayurl, payload, { headers }).then(
                    function(response) {
                        const parsedData = response.data;
                        paylink = base_url + "/payment-requests/" + parsedData.id;
                        console.log('payment url', paylink)
                        res.send(paylink)
                    }
                )
                console.log('axios response', ares);
                */

        })

        const btcpaylink = "https://btcpay.bitcoin.org.hk";
        res.json({ message: btcpaylink })
            // res.send(btcpaylink);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = app;