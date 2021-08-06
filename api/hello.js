export default (req, res) => {
    //res.json({ message: 'hello' })
    const btcpaylink = "https://btcpay.bitcoin.org.hk";
    res.json({ message: btcpaylink })
}