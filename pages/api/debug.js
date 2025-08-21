import { getSheetData } from "../../lib/sheets";

export default async function handler(req, res) {
  try {
    const rows = await getSheetData();
    res.status(200).json({
      ok: true,
      count: rows.length,
      sample: rows.slice(0, 5).map(r => ({ sub: r.subdomain, slug: r.slug }))
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: String(err && err.message || err),
      hasEnv: {
        GOOGLE_CLIENT_EMAIL: !!process.env.GOOGLE_CLIENT_EMAIL,
        GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY,
        GOOGLE_SHEET_ID: !!process.env.GOOGLE_SHEET_ID
      }
    });
  }
}
