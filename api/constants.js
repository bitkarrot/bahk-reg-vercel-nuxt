export const base_url = process.env.VUE_APP_BASE_URL
export const apikey = process.env.VUE_APP_APIKEY
export const storeId = process.env.VUE_APP_STORE_ID

export const headers = {
    Authorization: 'token ' + apikey,
    'Content-Type': 'application/json'
}
export const btcpayurl = base_url + '/api/v1/stores/' + storeId + '/payment-requests'
    // original POS btcpay membership store. 
export const backuplink = "https://btcpay.bitcoin.org.hk/apps/3u6zPjD3b9TxdP7kf7SNHTtvVFr3/pos"

export const { google } = require('googleapis')
export const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
export const sheetID = '1IMG9vZhrJHh9be5KVkXfXHuuIYqafbX2r6sdYlFHWUE'
export const keyfile = 'credentials.json'

export const auth = new google.auth.GoogleAuth({
    keyFile: keyfile,
    scopes: SCOPES
})
export const client = auth.getClient()