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
        let description = baseDesc + "<b>New Membership for: </b>" + fields.name + "<br><b> Email: </b>" + fields.email + " </b><br/>";
        let other_data = "</br/>Chinese name: " + fields.chinese + "<br>Physically present: " + fields.physical + "<br>Ok to publish: " + fields.publish + "<br>Telegram: " + fields.telegram + "<br>Keybase: " + fields.keybase

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
        let description = baseDesc + "<b>New Membership for: </b> " + fields.orgname + "<br><b>Contact Person: </b>" + fields.name + "<br><b> Email:</b> " + fields.email + " </b>";
        let other_data = "</br/>Chinese name: " + fields.chinese + "<br>Ok to publish membership: " + fields.publish + "<br>link to corporate logo: " + fields.url
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