import { client, auth, sheetID, google } from './constants.js';

// push data to googlespreadsheets

export function pushdata(fields) {
    const currentTime = new Date().toUTCString()
    const googleSheets = google.sheets({ version: 'v4', auth: client })
    console.log('currentTime', currentTime)

    if (fields.type === 'individual') {
        const result = googleSheets.spreadsheets.values.append({
            auth: auth,
            spreadsheetId: sheetID,
            range: "Individuals!A:H",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [
                        currentTime,
                        fields.name,
                        fields.chinese,
                        fields.email,
                        fields.physical,
                        fields.publish,
                        fields.telegram,
                        fields.keybase,
                    ],
                ],
            },
        });
        console.log('google sheets result', result);
    } else if (fields.type === 'organization') {
        const result = googleSheets.spreadsheets.values.append({
            auth: auth,
            spreadsheetId: sheetID,
            range: "Organizations!A:G",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [
                        currentTime,
                        fields.orgname,
                        fields.chinese,
                        fields.name,
                        fields.email,
                        fields.publish,
                        fields.url,
                    ],
                ],
            },
        });
        console.log('google sheets result', result);
    }
    return currentTime
}