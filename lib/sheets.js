import { google } from "googleapis";

export async function getSheetData() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !sheetId) {
    console.warn("Missing Google Sheets env vars");
    return [];
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Sheet1!A2:K",
  });

  const rows = res.data.values || [];
  return rows.map((r) => ({
    subdomain: r[0] || "",
    slug: r[1] || "",
    pageType: r[2] || "",
    keyword: r[3] || "",
    h1: r[4] || "",
    meta: r[5] || "",
    pros: r[6] || "",
    cons: r[7] || "",
    faqs: r[8] || "",
    program: r[9] || "",
    link: r[10] || "",
  }));
}
