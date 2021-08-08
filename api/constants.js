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