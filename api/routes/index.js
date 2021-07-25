const express = require('express')
const { Nuxt, Builder } = require('nuxt');
const config = require('../nuxt.config.js');
const nuxt = new Nuxt(config);

// Create express instance
const app = express()

const test = require('./api/routes/test')
app.use(test)

// Export express app
module.exports = app

// Start standalone server if directly running
/*
if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`API server listening on port ${port}`)
    })
}
*/
