# BAHK registration to btcpay

Web registration forms that push data to Btcpay instance. 

hosted on Vercel. 

# TODO 
- add expiry to payload.js in format "expiryDate": 1592312018
-

# Vercel 

## Development

You need to have package `vercel` globally installed:

```sh
yarn global add vercel
```

Make sure to add `yarn run dev` on the _Development command_, on the settings of your project on vercel.com:

![vercel settings](vercel-settings.png)

Then you can run the following command to have a local development experience

```sh
vc dev -A vercel.dev.json
```

## Deployment

Any lambdas added to `api/` must be added to the `routes` config in the `vercel.json` file.
