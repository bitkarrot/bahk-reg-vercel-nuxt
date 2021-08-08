import { getbtcpayload } from './payload.js';
import { base_url, headers, btcpayurl, backuplink, apikey, storeId } from './constants.js';
//import { pushdata } from './pushdata.js';

const express = require("express");
const router = express.Router();
const axios = require('axios')
const formidable = require('formidable')

//console.log('base url: ', base_url)
//console.log('api key:', apikey)
//console.log('store id: ', storeId)

/**
 * POST entries from Form
 *
 * @return btcpay link | empty.
 */
router.post("/api/indivapp", async(req, res) => {
    try {

        const form = new formidable.IncomingForm({ multiples: true });
        form.parse(req, async(err, fields, files) => {
            // const currentTime = pushdata(fields)
            // console.log('Indiv: current time returned by push to sheets: ', currentTime)

            const payload = getbtcpayload(fields)
            let base_link = base_url + "/payment-requests/"
            console.log('getting axios post....')

            const ares = await axios.post(btcpayurl, payload, { headers }).then(
                function(response) {
                    const parsedData = response.data;
                    console.log('btcpay returned data: ', parsedData)
                    console.log('parsed ID', parsedData.id)
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

module.exports = router;