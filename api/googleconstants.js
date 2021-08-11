export const { google } = require('googleapis')
export const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
export const sheetID = '15SywK0yYrAr7_3CBaO2XnvxUDGtn2lELcJnwrqr9tMA'
export const keyfile = 'credentials.json'

export const auth = new google.auth.GoogleAuth({
    keyFile: keyfile,
    scopes: SCOPES
})
export const client = auth.getClient()