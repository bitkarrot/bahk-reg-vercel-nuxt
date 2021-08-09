export function getbtcpayload(fields) {
    const pricing = { 'individual': '0.0013', 'org': '0.0026' };
    const title = {
        'individual': 'Individual Membership',
        'org': 'Corporate Membership'
    }
    const currency = 'BTC'
        //const expiryDate24 = new Date().getTime() + (24 * 60 * 60 * 1000);
    const email = fields.email

    const baseDesc = "<b>Bitcoin Association of Hong Kong</b><br/> <b>Contact:</b> info@bitcoin.org.hk <br/><br/>"

    if (fields.type === 'individual') {
        let description = baseDesc + "<br><b>New Membership for: </b> <br> <b>Name:</b>" + fields.name + "<br><b> Email: </b>" + fields.email;
        let other_data = "<b>Chinese name: </b> " + fields.chinese + "<br><b>Physically present:</b> " + fields.physical + "<br><b>Ok to publish: </b> " + fields.publish + "<br> <b>Telegram:</b> " + fields.telegram + "<br> <b>Keybase: </b>" + fields.keybase + "<br>"

        description = description + "<br>" + other_data;

        /* PAYLOAD to btcpay create new payment request */
        const payload = {
                amount: pricing.individual,
                title: title.individual,
                currency: currency,
                email: email,
                description: description,
                expiryDate: '',
                embeddedCSS: '',
                customCSSLink: '',
                allowCustomPaymentAmounts: false
            }
            //console.log("payload", payload)
        return payload

    } else if (fields.type === 'organization') {
        let description = baseDesc + "<br><b>New Membership for: </b> <br> <b>Name:</b>" + fields.orgname + "<br><b>Contact Person: </b>" + fields.name + "<br><b> Email:</b> " + fields.email;
        let other_data = "<b>Chinese name: </b>" + fields.chinese + "<br> <b>Ok to publish membership: </b>" + fields.publish + "<br><b>Link to corporate logo: </b>" + fields.url + "<br/>"
        description = description + "<br>" + other_data

        const payload = {
                amount: pricing.org,
                title: title.org,
                currency: currency,
                email: email,
                description: description,
                expiryDate: '',
                embeddedCSS: '',
                customCSSLink: '',
                allowCustomPaymentAmounts: false
            }
            //console.log("payload", payload)
        return payload
    }
}