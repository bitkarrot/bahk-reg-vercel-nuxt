const axios = require('axios')
import { headers, storeId } from './constants.js';

export default async(req, res) => {

    // get all payment-requests 
    let payreqs = "https://btcpay.bitcoin.org.hk/api/v1/stores/" + storeId + "/payment-requests"


    await axios.get(payreqs, { headers }).then(
        function(response) {
            const parsedData = response.data;
            for (let i = 0; i < parsedData.length; i++) {
                console.log('ids', parsedData[i].id)
            }
            // assume most recent ID is the 0th ID
            //  console.log('btcpay returned data: ', parsedData)
            res.send(response.data)

        }
    ).catch(function(error) {
        console.log('axios error', error)
        res.send(error)
    });

}