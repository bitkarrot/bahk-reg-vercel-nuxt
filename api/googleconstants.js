export const { google } = require('googleapis')
export const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
export const sheetID = '1IMG9vZhrJHh9be5KVkXfXHuuIYqafbX2r6sdYlFHWUE'
export const keyfile = 'credentials.json'

export const auth = new google.auth.GoogleAuth({
    keyFile: keyfile,
    scopes: SCOPES
})
export const client = auth.getClient()