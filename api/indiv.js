import { getbtcpayload } from './payload.js';

const express = require("express");
const app = express()

const axios = require('axios')
const formidable = require('formidable')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

const base_url = process.env.VUE_APP_BASE_URL
const apikey = process.env.VUE_APP_APIKEY
const storeId = process.env.VUE_APP_STORE_ID
const headers = {
        Authorization: 'token ' + apikey,
        'Content-Type': 'application/json'
    }
    //console.log("headers", headers)
const btcpayurl = base_url + '/api/v1/stores/' + storeId + '/payment-requests'
    //console.log("posting url:", btcpayurl)

const backuplink = "https://btcpay.bitcoin.org.hk/apps/3u6zPjD3b9TxdP7kf7SNHTtvVFr3/pos"
    // original POS btcpay membership store. 

/**
 * POST entries from Form
 *
 * @return btcpay link | empty.
 */
app.post("/api/indiv", async(req, res) => {
    try {

        const form = new formidable.IncomingForm({ multiples: true });
        form.parse(req, async(err, fields, files) => {
            const payload = getbtcpayload(fields)
                //console.log('payload', payload)
            console.log('getting axios post....')
            console.log(headers)
            console.log(btcpayurl)
            let base_link = base_url + "/payment-requests/"
            console.log(base_link)

            const ares = await axios.post(btcpayurl, payload, { headers }).then(
                function(response) {
                    const parsedData = response.data;
                    console.log('btcpay returned data: ', parsedData)
                    console.log('parsed ID', parsedData.id)
                        //paylink = base_url + "/payment-requests/" + parsedData.id;
                    const paylink = base_link + parsedData.id;
                    console.log('payment url', paylink)
                    res.send(paylink)
                }
            ).catch(function(error) {
                console.log('axios error, send backuplink ', error)
                res.send(backuplink)
            });

        })

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = app;