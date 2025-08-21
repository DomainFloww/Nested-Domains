import { getSheetData } from "../lib/sheets";

function generateSiteMap(rows) {
  const urls = rows.map((r) => `https://${r.subdomain}/${r.slug}`);
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((u) => `<url><loc>${u}</loc></url>`).join("\n")}
  </urlset>`;
}

export async function getServerSideProps({ res }) {
  const rows = await getSheetData();
  const sitemap = generateSiteMap(rows);
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() { return null; }
