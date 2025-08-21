import Link from "next/link";
import { getSheetData } from "../lib/sheets";

export async function getServerSideProps() {
  const rows = await getSheetData();
  return { props: { rows } };
}

export default function All({ rows }) {
  return (
    <main style={{maxWidth:760, margin:"40px auto", fontFamily:"system-ui"}}>
      <h1>All Pages</h1>
      <ul>
        {rows.map((r, i) => (
          <li key={i}>
            <Link href={`/${r.slug}`}>{r.subdomain} – {r.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
