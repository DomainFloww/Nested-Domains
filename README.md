# Nested Domains Starter (Next.js + Google Sheets)

## What this does
- Reads rows from your Google Sheet (one row = one page)
- Serves content by **subdomain + slug**
- Ready for AdSense + Skimlinks (paste scripts in `pages/_app.js`)

## Setup (quick)
1) Create a **Google service account**, enable **Sheets API**, and share your sheet with the service account email as **Viewer**.
2) Copy `.env.example` to `.env.local` and fill the values:
   - `GOOGLE_CLIENT_EMAIL`
   - `GOOGLE_PRIVATE_KEY` (keep quotes and \n)
   - `GOOGLE_SHEET_ID` (from the sheet URL, between /d/ and /edit)
3) Push to GitHub. Connect the repo in **Vercel** and deploy.
4) In Vercel → **Domains**, add your root domain and a wildcard `*` record pointing to Vercel.

## Sheet columns (Sheet1, Row 1 headers)
Subdomain | Slug | Page Type | Target Keyword | H1 | Meta/Angle | Pros | Cons | FAQs | Affiliate Programs | Affiliate Link

- Example Subdomain: `vpn.yourdomain.com`
- Pros/Cons/FAQs can be pipe `|` separated lists

## Visit a page
- Example: `https://vpn.yourdomain.com/nordvpn-vs-surfshark`
